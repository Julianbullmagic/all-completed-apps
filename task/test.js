const expect = require('chai').expect;
let chai = require("chai");
let chaiHttp = require("chai-http");
const puppeteer = require('puppeteer');
let app = require("../server");
const request = require('supertest');
const mongoose = require("mongoose");
chai.use(chaiHttp);
chai.should();
chai.use(require('chai-things'));
var geodist = require('geodist')
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const randomLocation = require('random-location')
const User = require("./../models/user.model");
const Group = require("./../models/group.model");



var groupsdata

const host = "http://localhost:3000";
let page;

// the test suite
describe('My test suite', async function () {






  it("It should create 1000 users", async () =>{

         var userIds=[]
         for(var x=0;x<1000;x++){
           var agent = chai.request.agent(app)

              const p = {
              latitude: -33.8963363,
              longitude: 151.1532549
              }

                       const r = 10000 // meters
                       const randomPoint = randomLocation.randomCirclePoint(p, r)
                       let coords=[randomPoint.latitude,randomPoint.longitude]
                       var randnum=Math.floor(Math.random()*60)
                       var randcoords=coords
                       var randstring= Math.random().toString(36).substring(2, 9)
                       var userId=mongoose.Types.ObjectId()
                       userIds.push(userId.toString())
                      var values={
                        _id:userId.toString(),
                         name: randstring,
                         email: `${randstring}@gmail.com`,
                         coordinates:randcoords,
                         expertise: randstring,
                         password: "mmmmmm",
                       }

                       console.log(values)


                       agent.post('/groups/createuser')
                       .send({user:values}).then(function (res) {
                         console.log("add user to group",originalgroup._id,res.body.data._id)

                     expect(res).to.have.status(201);

                     agent.close()
                   })}
                   })




  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
    }
    return result;
  }

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



              it("It should create rules in all groups at all levels", async () =>{


                  var originalgroups=await chai.request(app)
                            .get("/groups/findgroups")

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
     }
     return result;
    }

    console.log(originalgroups.body.data,"original groups")
    for(let group of originalgroups.body.data){

    async function addRulesToGroups(level,groupdata){
      for(var x=0;x<5;x++){

      var ruleId=mongoose.Types.ObjectId()
      var randstring=makeid(5)
      var d = new Date();
      var n = d.getTime();
      let local=(groupdata.type=="localgroup")?true:false
      const res1=await chai.request(app)
                .post('/rules/createrule/'+ruleId)
      .send({rule:`a test rule ${randstring}`,
      groupId:groupdata._id,local:local,timecreated:n,level:level,
      approval:[...groupdata.members.slice(0,25)]})
    }
    }


      console.log(group)
      if(group.level==0){
      await addRulesToGroups(0,group)
      }
      if(group.level==1){
      await addRulesToGroups(1,group)
      }
      if(group.level==2){
        await addRulesToGroups(2,group)
      }
      if(group.level==3){
      await addRulesToGroups(3,group)
      }
      if(group.level==4){
    await addRulesToGroups(4,group)
      }
    }
    })


    it("It should create events in all groups at all levels", async () =>{

      var originalgroups=await chai.request(app)
                .get("/groups/findgroups")
    console.log("originalgroups.body.data",originalgroups.body.data)
    function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result;
    }


    async function addEventsToGroups(level,groupdata){
    for(var x=0;x<5;x++){

    var eventId=mongoose.Types.ObjectId()
    var randstring=makeid(5)
    var d = new Date();
    var n = d.getTime();
    let local=false
    if(groupdata.type=="localgroup"){
      local=true
    }
    const res1=await chai.request(app)
      .post('/events/createevent/'+eventId)
    .send({title:`a test event ${randstring}`,description:"a fun event",
    location:"Petersham",images:["xuafvwhugqpxevav7fjb"],groupId:groupdata._id,
    timecreated:n,local:local,level:level,approval:[...groupdata.members.slice(0,25)]})
    console.log("ids",groupdata._id,eventId)
    }
    }

    for(var group of originalgroups.body.data){
    console.log("group",group)
    if(group.level==0){
    await addEventsToGroups(0,group)
    }

    if(group.level==1){
    await addEventsToGroups(1,group)
    }
    if(group.level==2){
    await addEventsToGroups(2,group)
    }
    if(group.level==3){
    await addEventsToGroups(3,group)
    }
    if(group.level==4){
    await addEventsToGroups(4,group)
    }


    }
    })



              it("It should create polls in all groups at all levels", async () =>{

                  var originalgroups=await chai.request(app)
                            .get("/groups/findgroups")

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
     }
     return result;
    }


    for(var group of originalgroups.body.data){

    async function addPollsToGroups(level,groupdata){
      for(var x=0;x<5;x++){

      var pollId=mongoose.Types.ObjectId()
      var randstring=makeid(5)
      var d = new Date();
      var n = d.getTime();
      let local=false
      if(groupdata.type=="localgroup"){
        local=true
      }
      const res1=await chai.request(app)
                .post('/polls/createpoll/'+pollId)
      .send({pollquestion:`a test poll ${randstring}`,
      groupId:groupdata._id,timecreated:n,local:local,level:level,approval:[...groupdata.members.slice(0,25)]})
    console.log(groupdata.members.slice(0,25))
    }
    }


      console.log(group)
      if(group.level==0){
      await addPollsToGroups(0,group)
      }
      if(group.level==1){
      await addPollsToGroups(1,group)
      }
      if(group.level==2){
        await addPollsToGroups(2,group)
      }
      if(group.level==3){
      await addPollsToGroups(3,group)
      }
      if(group.level==4){
    await addPollsToGroups(4,group)
      }
    }
    })


    it("It should create posts in all groups at all levels", async () =>{

      var originalgroups=await chai.request(app)
                .get("/groups/findgroups")
    console.log("originalgroups.body.data",originalgroups.body.data)
    function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *
    charactersLength));
    }
    return result;
    }


    async function addPostsToGroups(level,groupdata){
    for(var x=0;x<5;x++){
    var postId=mongoose.Types.ObjectId()
    var randstring=makeid(5)
    var d = new Date();
    var n = d.getTime();
    let local=false
    if(groupdata.type=="localgroup"){
      local=true
    }
    const res1=await chai.request(app)
      .post('/posts/createpost/'+postId)
    .send({post:`a test post ${randstring}`,local:local,groupId:groupdata._id,timecreated:n,createdby:"6160dba0883629822da5fe0a"})
    console.log("ids",groupdata._id,postId)
    }
    }

    for(var group of originalgroups.body.data){
    console.log("group",group)
    if(group.level==0){
    await addPostsToGroups(0,group)
    }

    if(group.level==1){
    await addPostsToGroups(1,group)
    }
    if(group.level==2){
    await addPostsToGroups(2,group)
    }
    if(group.level==3){
    await addPostsToGroups(3,group)
    }
    if(group.level==4){
    await addPostsToGroups(4,group)
    }
    }
    })

    })

    it("It should create restriction polls in all groups at all levels", async () =>{

      var originalgroups=await chai.request(app)
      .get("/groups/findgroups")
      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
        }
        return result;
      }


      async function addRestrictionPollsToGroups(level,groupdata){
        for(var x=0;x<5;x++){
          var postId=mongoose.Types.ObjectId()
          var randstring=makeid(5)
          var d = new Date();
          var n = d.getTime();


          let restrictions=['cannot post','cannot suggest rules or vote for rules','cannot create polls',
        'cannot use chat','cannot see events','cannot vote in jury','remove from group']

        let restrictindex=Math.random()*restrictions.length
        restrictindex=Math.floor(restrictindex)
        let local=false
        if(groupdata.type=="localgroup"){
          local=true
        }

          let id=await chai.request(app)
          .post('/polls/createrestrictionpoll/'+postId)
          .send({usertorestrict:groupdata['members'][0]['_id'],usertorestrictname:groupdata['members'][0]['name'],
          restriction:restrictions[restrictindex],duration:3,approval:approval.slice(0,19),
          timecreated:n,local:local,createdby:groupdata['members'][0]['_id'],groupId:groupdata._id})
          console.log("IIDDD",id.body.id)
          id=id.body.id

          var restrictionId=mongoose.Types.ObjectId()
          restrictionId=restrictionId.toString()
  console.log({
  _id:restrictionId,
  usertorestrict:groupdata['members'][0]['_id'],
  restriction:restrictions[`${restrictindex}`],
  groupId:groupdata._id,
  duration:3,
  timecreated:n,
  associatedpoll:id
})
          await chai.request(app)
          .post('/groups/createuserrrestriction/')
          .send({
            _id:restrictionId,
            usertorestrict:groupdata['members'][0]['_id'],
            restriction:restrictions[`${restrictindex}`],
            groupId:groupdata._id,
            local:(groupdata.type=="localgroup")?true:false,
            duration:3,
            timecreated:n,
            associatedpoll:id
          })


          await chai.request(app)
          .put('/groups/addrestrictiontouser/'+groupdata['members'][0]['_id']+'/'+postId)
          .send()
           console.log(restrictions[`${restrictindex}`])
        }
      }

      for(var group of originalgroups.body.data){
        if(group.level==0){
          await addRestrictionPollsToGroups(0,group)
        }

        if(group.level==1){
          await addRestrictionPollsToGroups(1,group)
        }
        if(group.level==2){
          await addRestrictionPollsToGroups(2,group)
        }
        if(group.level==3){
          await addRestrictionPollsToGroups(3,group)
        }
        if(group.level==4){
          await addRestrictionPollsToGroups(4,group)
        }
      }
  })
