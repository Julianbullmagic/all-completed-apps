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
      if ((gr.members.length<2)&&(elapsed>2629800000)){
        Group.findByIdAndDelete(gr._id).exec()
        if(gr.images){
          for (let img of gr.images){
            cloudinary.uploader.destroy(img, function(error,result) {
            console.log(result, error) });
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
      if (difference<2629800000){
        recentsignins.push(login)
      }
      if (difference<7889400000){
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
      if(recentsignins.length<3&&millisecondssinceusercreated>2629800000){
        await User.findByIdAndUpdate(user._id,{active:false}).exec()
      }
      if(recentsignins.length>3){
        await User.findByIdAndUpdate(user._id,{active:true}).exec()
      }
    }
  }

for (let item of events){
  if (n-item.timecreated>2629800000){
    Event.findByIdAndDelete(item._id).exec()
    cloudinary.v2.uploader.destroy(item.images[0],
      function(error, result){console.log(result)});
  }
}
for (let item of restrictions){
  if (n-item.timecreated>2629800000){
    Restriction.findByIdAndDelete(item._id).exec()
  }
}
for (let item of posts){
  if (n-item.timecreated>2629800000){
    Post.findByIdAndDelete(item._id).exec()
  }
}


for (let item of restrictionpolls){
  if (n-item.timecreated>2629800000){
    RestrictionPoll.findByIdAndDelete(item._id).exec()
  }
}
for (let item of polls){
  if (n-item.timecreated>2629800000){
    Poll.findByIdAndDelete(item._id).exec()
  }
}
for (let item of comments){
  if (n-item.timecreated>2629800000){
    Comment.findByIdAndDelete(item._id).exec()
  }
}



console.log(restrictions)
for (let rest of restrictions){
  let durationinmilli=rest.duration*86400000
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
  let groups=await Group.find()
     .populate({
      path : 'groupsbelow',
      populate : {
        path : 'members'
      }
    }).exec()

  for (let group of groups){
    console.log("group",group)
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
         members.sort((a, b) => (a.votes.length < b.votes.length) ? 1 : -1)
         let numofreps=Math.round(members.length/25)
         let leaders=members.slice(0,numofreps)
         leaders=leaders.map(item=>item._id)
         console.log("members sorted",leaders)

         await Group.findByIdAndUpdate(group._id, {$addToSet : {
         members:leaders
       }}).exec()
    }
  }
}
})


// (async function(){
//
//
//     await Group.deleteMany({type:'localgroup'})
//
//   //   await User.updateMany({},{$set:{groupstheybelongto:[] }},
//   //                             function (err, docs) {
//   //     if (err){
//   //         console.log(err)
//   //     }
//   //     else{
//   //         console.log("Updated User : ", docs);
//   //     }
//   // })
//
//
//
// var users=await User.find({ })
//
// console.log(users)
//
// await divideUsersIntoGroups(users,"localgroup")
//
//
// async function divideUsersIntoGroups(gr,ty){
//   if (gr.length>40){
//   var levelzerogroups=await divideUsersAtLevelIntoGroups(gr,ty,40,0)
//   var levelonegroups=await divideUsersAtLevelIntoGroups(gr,ty,400,1,levelzerogroups)
//   }
//   if (gr.length>400){
//   var leveltwogroups=await divideUsersAtLevelIntoGroups(gr,ty,4000,2,levelzerogroups,levelonegroups)
//   }
//   if (gr.length>4000){
//     var levelthreegroups=await divideUsersAtLevelIntoGroups(gr,ty,40000,3,levelzerogroups,leveltwogroups)
//
//   }
//   if (gr.length>40000){
//     var levelthreegroups=await divideUsersAtLevelIntoGroups(gr,ty,400000,3,levelzerogroups,leveltwogroups)
//   }
//
//
//   console.log("groups!",levelzerogroups.length)
//   if(levelonegroup){
//     console.log(levelonegroups.length)
//   }
//   if(leveltwogroup){
//     console.log(leveltwogroups.length)
//   }
//   if(levelthreegroup){
//     console.log(levelthreegroups.length)
//   }
// var groupids=[]
// if(levelzerogroups){
//   var levelzerogroupsids=levelzerogroups.map(item=>{return item._id})
//   groupids.push(...levelzerogroupsids)
// }
// if(levelonegroups){
//   var levelonegroupsids=levelonegroups.map(item=>{return item._id})
//   groupids.push(...levelonegroupsids)
//   for (var levelonegroup of levelonegroups){
//     for (var higher of levelonegroup.groupsbelow){
//       await Group.findByIdAndUpdate(higher, { groupabove:levelonegroup._id },
//                                 function (err, docs) {
//         if (err){
//             console.log(err)
//         }
//         else{
//             // console.log("Updated User : ", docs);
//         }
//     })
//     }
//   }
// }
// if(leveltwogroups){
//   var leveltwogroupsids=leveltwogroups.map(item=>{return item._id})
//   groupids.push(...leveltwogroupsids)
//   for (var leveltwogroup of leveltwogroups){
//     for (var highertwo of leveltwogroup.groupsbelow){
//       await Group.findByIdAndUpdate(highertwo, { groupabove:leveltwogroup._id },
//                                 function (err, docs) {
//         if (err){
//             console.log(err)
//         }
//         else{
//             // console.log("Updated User : ", docs);
//         }
//     })
//     }
//   }
// }
// if(levelthreegroups){
//   var levelthreegroupsids=levelthreegroups.map(item=>{return item._id})
//   groupids.push(...levelthreegroupsids)
//   for (var levelthreegroup of levelthreegroups){
//   for (var higherthree of levelthreegroup.groupsbelow){
//     await Group.findByIdAndUpdate(higherthree, { groupabove:levelthreegroup._id },
//                               function (err, docs) {
//       if (err){
//           console.log(err)
//       }
//       else{
//           // console.log("Updated User : ", docs);
//       }
//   })
//   }
// }
// }
//
// console.log("groupids",groupids)
// }
//
//
//
//   async function divideUsersAtLevelIntoGroups(supergroup,type,theshold,level,localgroups,groupsonelevelbelow){
//
// var highergroups=[]
//
//       const k=Math.ceil(supergroup.length/theshold)   // Groups Number
//
//       console.log("k",k)
//       const size = theshold // Group size
//
//       var docsCopy=JSON.parse(JSON.stringify(supergroup))
//       let vectors=supergroup.map(item=>{return {x:item.coordinates[0],y:item.coordinates[1]}})
//     kmeans.init({k: k, runs: size, equalSize: true, normalize: false })
//     const sum = kmeans.calc(vectors);
//
//
//     for (var vector of vectors){
//       for (var user of docsCopy){
//         if (user.coordinates[0]==vector.x&&user.coordinates[1]==vector.y&&!user.k){
//           user.k=vector.k
//         }
//       }
//     }
//     var groups={}
//     for (var user of docsCopy){
//       if (groups.hasOwnProperty(`${user.k}`)){
//         groups[`${user.k}`].push(user)
//       }else{
//         groups[`${user.k}`]=[user]
//       }
//     }
//     var highermembers=[]
//
//
//     for (const group in groups) {
//       var latlongroup=groups[`${group}`].map(member=>{return {lat: member.coordinates[0], lon: member.coordinates[1]}})
//       var coordinates=groups[`${group}`].map(member=>{return [member.coordinates[0],member.coordinates[1]]})
//       var userIds=groups[`${group}`].map(member=>{return member._id})
//
//       var bias = 10
//
//     var result = geocluster(coordinates, bias)
//
//     var latloncentroid={lat: result[0]['centroid'][0], lon: result[0]['centroid'][1]}
//     distancesArray=[]
//     for (var latlon of latlongroup){
//       var dist = geodist(latloncentroid, latlon)
//     distancesArray.push(dist)
//     }
//     distancesArray.sort()
//     let location=''
//     location=await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${result[0]['centroid'][1]},${result[0]['centroid'][0]}.json?access_token=pk.eyJ1IjoianVsaWFuYnVsbCIsImEiOiJja25zbXJibW0wNHgwMnZsaHJoaDV6MTg4In0.qPBGW4XMJcsZSUCrQej8Zw`)
//       .then(data => {
//         let loc=""
//         console.log(data['data']['features'])
//         if(data['data']['features'][0]['context'][1]){
//           console.log("features",data['data']['features'][0]['context'][1]['text'],data['data']['features'][0]['context'][2]['text'])
//
//               loc=`${data['data']['features'][0]['context'][1]['text']}, ${data['data']['features'][0]['context'][2]['text']}`
//
//
//           return loc
//         }
//     }).catch(err => console.log(err));
//
//     var associatedlocalgroups=[]
//     if(localgroups){
//       for (var localgroup of localgroups){
//       console.log(typeof localgroup.members[0])
//       console.log(typeof userIds[0])
//
//     var c = userIds.filter(approvee => localgroup.members.includes(approvee))
//     if (c.length/localgroup.members.length>0.5){
//     associatedlocalgroups.push(localgroup._id)
//     }
//   }}
//     var associatedhighergroupsdirectlybelow=[]
//
//   if(groupsonelevelbelow){
//     for (var groupbelow of groupsonelevelbelow){
//   console.log("groupbelow",groupbelow)
//     var c = userIds.filter(approvee => groupbelow.allmembers.includes(approvee))
//     console.log("c.length",c.length)
//     if (c.length/groupbelow.allmembers.length>0.75){
//     associatedhighergroupsdirectlybelow.push(groupbelow._id)
//     }
//
//     }
//   }
//
// console.log("DISTANCES ARRAY",distancesArray,distancesArray[`${distancesArray.length-1}`],distancesArray[`${distancesArray.length}`])
//
//
//       var id=new mongoose.Types.ObjectId().toString()
//       var shuffledmembers=shuffle(userIds)
//       let newGroup = new Group({
//         _id:id,
//         level:level,
//         type:type,
//         radius:distancesArray[`${distancesArray.length-1}`],
//         title:supergroup.title,
//         description:supergroup.description,
//         location:supergroup.location,
//         centroid:supergroup.centroid,
//         location:location,
//         associatedlocalgroups:associatedlocalgroups,
//         centroid:result[0]['centroid'],
//       });
//       if (level==1){
//         newGroup.groupsbelow=associatedlocalgroups
//
//       }
//       if (level>1){
//         newGroup.groupsbelow=associatedhighergroupsdirectlybelow
//       }
//       if (level>0){
//         newGroup.allmembers= userIds
//
//       }
//       if(level==0){
//         newGroup.members=userIds
//         newGroup.allmembers= userIds
//       }
//       highergroups.push(newGroup)
//
//
//       newGroup.save((err,docs) => {
//         if(err){
//           console.log(err);
//         }else{
//           // console.log(docs);
//
//         }
//       })
//
//
//       const promises=shuffledmembers.slice(0,40).map(user=>{
//         highermembers.push(user)
//         User.findByIdAndUpdate(user, {$addToSet : {
//          groupstheybelongto:id
//         }}).exec(function(err,docs){
//           if(err){
//                   console.log(err);
//               }else{
//                  // console.log("DOCS",docs)
//                }})
//       })
//
//       await Promise.all(promises);
//
// if(level==0&&type=="localgroup"){
//   const promises=shuffledmembers.slice(0,40).map(user=>{
//         User.findByIdAndUpdate(user, {
//          localgroup:id
//         }).exec(function(err,docs){
//           if(err){
//                   console.log(err);
//               }else{
//                  // console.log("DOCS",docs)
//                }})
//       })
//
//       await Promise.all(promises);
// }
//
//     }
//     return highergroups
//   }
// })()
