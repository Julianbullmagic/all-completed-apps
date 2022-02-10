const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors  = require('cors')
const path = require('path')
const axios = require('axios');
const compress = require( 'compression')
const helmet = require( 'helmet')
const userRoutes = require( './routes/user.routes')
const leadersRoutes = require( './routes/leaders.routes')
const authRoutes = require( './routes/auth.routes')
const postRoutes = require( './routes/post.routes')
const groupsRoutes = require( './routes/groups.routes')
const rulesRoutes = require( './routes/rules.routes')
const eventsRoutes = require( './routes/events.routes')
const pollRoutes = require( './routes/polls.routes')
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary');
const multer=require('multer')
const { Chat } = require("./models/Chat");
const { auth } = require("./middleware/auth");
const cookieParser = require("cookie-parser");
const fs = require("fs");
var cron = require('node-cron');
const User = require("./models/user.model");
const Group = require("./models/group.model");
const Rule = require("./models/rule.model");
const Event = require("./models/event.model");
const Restriction = require("./models/restriction.model");
const Post = require("./models/post.model");
const Poll = require("./models/poll.model");
const RestrictionPoll = require("./models/restrictionpoll.model");
const Comment = require("./models/comment.model");
const KmeansLib = require('kmeans-same-size');
var kmeans = new KmeansLib();
var geocluster = require("geocluster");
var geodist = require('geodist')


cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
  secure: true
});



//comment out before building for production
const PORT = process.env.PORT || 5000

const app = express();
const server = require("http").createServer(app);


const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000"||"https://variety-performers-group.herokuapp.com",
    methods: ["GET", "POST"]
  }
});



app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(cookieParser());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
  next();
})


const connect = mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => console.log("connected to mongodb"))
  .catch(err => console.log(err));


// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', postRoutes)
app.use('/groups', groupsRoutes)
app.use('/leaders', leadersRoutes)
app.use('/rules', rulesRoutes)
app.use('/events', eventsRoutes)
app.use('/posts',postRoutes)
app.use('/polls', pollRoutes)



app.use('/api/users', require('./routes/users'));
app.use('/api/chat', require('./routes/chat'));


const MILLISECONDS_IN_A_MONTH=2629800000
const MILLISECONDS_IN_THREE_MONTHS=7889400000
const MILLISECONDS_IN_A_DAY=86400000



cron.schedule('0 0 0 * * *', () => {

  (async function(){
    let d = new Date();
    let n = d.getTime();
    let users=await User.find().exec()
    let events=await Event.find().exec()
    let restrictions=await Restriction.find().exec()
    let posts=await Post.find().exec()
    let polls=await Poll.find().exec()
    let restrictionpolls=await RestrictionPoll.find().exec()
    let comments=await Comment.find().exec()
    let groups=await Group.find().exec()


    for (let gr of groups){
      let elapsed=n-gr.timecreated
      if(gr.level==0){
        if ((gr.members.length<3)&&(elapsed>MILLISECONDS_IN_A_MONTH)){
          Group.findByIdAndDelete(gr._id).exec()
          for (let group of groups){
            if (group.groupsbelow.includes(gr._id)){
              Group.findByIdAndUpdate(gr._id, {$pull : {
                groupsbelow:gr._id
              }}).exec()
            }
          }
          if(gr.images){
            for (let img of gr.images){
              cloudinary.uploader.destroy(img, function(error,result) {
              console.log(result, error) });
            }
          }
        }
      }
    }

  for (let user of users){
    let recentsignins=[]
    let thresholdtodelete=[]
    let date = new Date(user.created); // some mock date
    let millisecondssinceusercreated = date.getTime()
    millisecondssinceusercreated=n-millisecondssinceusercreated


    let index=user.signins.length-1
    console.log('index',index)
    console.log('most recent signing',user.signins[`${index}`])
    let timeelapsedsincelogin=n-user.signins[`${index}`]
    console.log("timeelapsedsincelogin",timeelapsedsincelogin)
    if(timeelapsedsincelogin>1000){

      if(user.images){
        for (let img of user.images){

          cloudinary.uploader.destroy(img, function(error,result) {
          console.log(result, error) });
        }
      }

      await User.findByIdAndDelete(user._id).exec()
    }


    for (let login of user.signins){
      console.log("login",login)
      let difference=n-login
      console.log(difference)
      if (difference<MILLISECONDS_IN_A_MONTH){
        recentsignins.push(login)
      }
      if (difference<MILLISECONDS_IN_THREE_MONTHS){
       thresholdtodelete.push(login)
      }

      if(thresholdtodelete.length==0){
        await User.findByIdAndDelete(user._id).exec()
        for (let gr of groups){
          Group.findByIdAndUpdate(gr._id, {$pull : {
            members:user._id
          }}).exec()
        }
      }

      console.log(recentsignins)
      console.log("milliseconds",millisecondssinceusercreated)
      if(recentsignins.length<3&&millisecondssinceusercreated>MILLISECONDS_IN_A_MONTH){
        await User.findByIdAndUpdate(user._id,{active:false}).exec()
      }
      if(recentsignins.length>3){
        await User.findByIdAndUpdate(user._id,{active:true}).exec()
      }
    }
  }

for (let item of events){
  if (n-item.timecreated>MILLISECONDS_IN_A_MONTH){
    Event.findByIdAndDelete(item._id).exec()
    cloudinary.v2.uploader.destroy(item.images[0],
      function(error, result){console.log(result)});
  }
}
for (let item of restrictions){
  if (n-item.timecreated>MILLISECONDS_IN_A_MONTH){
    Restriction.findByIdAndDelete(item._id).exec()
  }
}
for (let item of posts){
  if (n-item.timecreated>MILLISECONDS_IN_A_MONTH){
    Post.findByIdAndDelete(item._id).exec()
  }
}


for (let item of restrictionpolls){
  if (n-item.timecreated>MILLISECONDS_IN_A_MONTH){
    RestrictionPoll.findByIdAndDelete(item._id).exec()
  }
}
for (let item of polls){
  if (n-item.timecreated>MILLISECONDS_IN_A_MONTH){
    Poll.findByIdAndDelete(item._id).exec()
  }
}
for (let item of comments){
  if (n-item.timecreated>MILLISECONDS_IN_A_MONTH){
    Comment.findByIdAndDelete(item._id).exec()
  }
}



console.log(restrictions)
for (let rest of restrictions){
  let durationinmilli=rest.duration*MILLISECONDS_IN_A_DAY
  let timesincecreation=n-rest.timecreated
  if (timesincecreation>durationinmilli){
    Restriction.findByIdAndDelete(rest._id)
    .exec()

    User.findByIdAndUpdate(rest.usertorestrict, {$pull : {
    restrictions:rest._id
    }}).exec(function(err,docs){
      if(err){
              console.log(err);
          }else{

            console.log(docs)
    }
     })
  }
}

  })()
 })


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  },
  // fileFilter: (req, file, cb) => {
  //   const ext = path.extname(file.originalname)
  //   if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
  //     return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
  //   }
  //   cb(null, true)
  // }
})

var upload = multer({ storage: storage }).single("file")

app.post("/api/chat/uploadfiles", auth ,(req, res) => {
  upload(req, res, err => {
    if(err) {
      return res.json({ success: false, err })
    }
    return res.json({ success: true, url: res.req.file.path });
  })
});

var users={}


io.on("connection", socket => {


 //  socket.on('disconnect', function () {
 //     console.log("disconnecting",socket.id)
 //     console.log(users)
 //     for (let x in users){
 //       if(users[`${x}`]==socket.id){
 //         delete users[`${x}`]
 //       }
 //     }
 //     console.log(users)
 // });



  socket.on("new user",function(data){

      socket.name=data
      console.log("NEW USER",data)
        users[`${socket.name}`]=socket.id
      console.log("new room",data.toString())
      let da=data
      socket.join(data)
      console.log(io.sockets.adapter.rooms)

  })


  socket.on("join room",async function(room){
    console.log("join room!",room.userName)
    socket.join(room.room);

    let us=room.userName
    socket.join(us)
    console.log(io.sockets.adapter.rooms)

    let user = await User.findById(room.userId).populate('recentprivatemessages').exec()
    let result = user.recentprivatemessages.filter(us =>!(us.sender==room.recipientId));
    let chatids=result.map(item=>item._id)
    let usertwo = await User.findByIdAndUpdate(room.userId,{recentprivatemessages:chatids},{new:true}).exec()
    user.recentprivatemessages=result
    io.to(socket.id).emit("Joined Room", user);
  })


  socket.on("Input Chat Message To User", msg => {
console.log("IMPUTTING MESSAGE TO USER")
    connect.then(db => {
      try {
        var d = new Date();
        var n = d.getTime();
        console.log("message",msg)
          var chat = new Chat({ message: msg.chatMessage, sender:msg.userId, type: msg.type,recipient:msg.recipient._id,timecreated:n })


  console.log("chat",chat)
          chat.save((err, doc) => {
            console.log("error",err)
            console.log(doc)
            if(err) return res.json({ success: false, err });


console.log("MSG RECIPIENT!!!!!!!!!",msg.recipient._id)
            User.findByIdAndUpdate(msg.recipient._id,{$push : {
            recentprivatemessages:doc._id
            }}).exec(function(err,docs){
              if(err){
                      console.log(err);
                  }else{
                      console.log(docs)
            }
             })



            Chat.find({ "_id": doc._id })
            .populate('sender')
            .exec((err, doc)=> {
              let doccopy=JSON.parse(JSON.stringify(doc[0]))
              let sender=doc[0][`sender`][`_id`]
              doccopy.sender=sender
              console.log("SENDER",doccopy)
              io.emit("Output pm", doccopy);
              return io.to(msg.room).emit("Output Chat Message", doc);
            })
          })
      } catch (error) {
        console.error(error);
      }
    })
   })


  socket.on("Input Chat Message", msg => {

    connect.then(db => {
      try {
        console.log("message",msg)
        var d = new Date();
        var n = d.getTime();
          var chat = new Chat({ message: msg.chatMessage, sender:msg.userId,groupId:msg.groupId, type: msg.type,timecreated:n })


console.log("chat",chat)
          chat.save((err, doc) => {
            console.log("error",err)
            console.log(doc)
            if(err) return res.json({ success: false, err })

            Chat.find({ "_id": doc._id })
            .populate("sender")
            .exec((err, doc)=> {

                return io.emit("Output Chat Message", doc);
            })
          })
      } catch (error) {
        console.error(error);
      }
    })
   })

})


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));




if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}


module.exports = app



server.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`)
});






function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

async function shufflemembersallgroups(){
let groups=await Group.find().exec()
for (let group of groups){
 let shuffledmembers=shuffle(group.members)
 Group.findByIdAndUpdate(group._id, {$addToSet : {
 members:shuffledmembers
}}).exec()
}
}

cron.schedule('0 0 1 * *', () => {
  console.log("running every month")
 shufflemembersallgroups()
})


cron.schedule('*/2 * * * *', () => {
  console.log('choosing leaders every minute');
chooseLeaders()
async function chooseLeaders(){
  let users=await User.find({}, '_id').exec()

for (let user of users){
  await User.findByIdAndUpdate(user, {
  groupstheybelongto:[]
}).exec()
}
  let groups=await Group.find()
     .populate({
      path : 'groupsbelow',
      populate : {
        path : 'members'
      }
    }).exec()

  for (let group of groups){
    console.log("group",group)
if (group.members){
  for (let memb of group.members){
    await User.findByIdAndUpdate(memb, {$addToSet:{
    groupstheybelongto:group._id
    }
  }).exec()
  }
}


if(group.level>0){
  await Group.findByIdAndUpdate(group._id, {
  members:[]
}).exec()
}
    for (let groupbelow of group.groupsbelow){
        let members=JSON.parse(JSON.stringify(groupbelow.members))
        let groupidentifier=`${groupbelow.title},${groupbelow.level}`

        for (var member of members){
             let groupidentifier=`${groupbelow.title},${groupbelow.level}`
             console.log("groupidentifier",groupidentifier)
             member.votes=member.votes.filter(item=>!item.startsWith(groupidentifier))
             console.log("USER.VOTES!!!!!!",member.votes)
         }
        members.filter(memb=>(memb.votes.length/groupbelow.members.length)>0.75)
         members.sort((a, b) => (a.votes.length < b.votes.length) ? 1 : -1)
         let numofreps=Math.round(members.length)
         // add /25 here
         let leaders=members.slice(0,numofreps)
         leaders=leaders.map(item=>item._id)
         console.log("members sorted",leaders)

         await Group.findByIdAndUpdate(group._id, {$addToSet : {
         members:leaders
       }}).exec()

       for (let leader of leaders){
         await User.findByIdAndUpdate(leader, {$addToSet:{
         groupstheybelongto:group._id
         }
       }).exec()
       }
    }
  }
}
})
