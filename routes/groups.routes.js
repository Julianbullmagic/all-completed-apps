const express =require( 'express')
const router = express.Router();
const userCtrl =require( '../controllers/user.controller')
const authCtrl =require( '../controllers/auth.controller')
const User = require("../models/user.model");
const Event = require("../models/event.model");
require('dotenv').config();
const nodemailer = require('nodemailer');
const Rule = require("../models/rule.model");
const Restriction= require("../models/restriction.model");
const Group = require("../models/group.model");

var random = require('mongoose-simple-random');


const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);


router.get("/getusers", (req, res) => {
  User.find({"active":true})
  .populate("restrictions")
  .populate("recentprivatemessages")
  .then(rule => res.json(rule))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/finduser/:userId", (req, res) => {
  User.find({_id:req.params.userId})
  .populate("restrictions")
  .populate("groupstheybelongto")
  .populate("highergroupstheybelongto")
  .exec(function(err,docs){
    if(err){
      console.log(err);
    }else{
      res.status(200).json({
        data: docs
      })}
    })})


    router.get("/findgroup/:groupId", (req, res, next) => {
      const items=Group.find({_id:req.params.groupId})
      .populate('members')
      .populate('groupabove')
      .populate({
        path : 'groupsbelow',
        populate : {
          path : 'members'
        }
      })
      .exec(function(err,docs){
        if(err){
          console.log(err);
        }else{
          res.status(200).json({
            data: docs
          });
        }

      })})

      router.get("/findgroupscoordinates", (req, res, next) => {
        const items=Group.find({}, { _id: 1, centroid: 1 })
        .exec(function(err,docs){
          if(err){
            console.log(err);
          }else{
            res.status(200).json({
              data: docs
            });
          }
        })})


        router.put("/addleaders/:groupId/:oldleaders/:newleaders", (req, res, next) => {
          let oldleaders=req.params.oldleaders.split(',')
          let newleaders=req.params.newleaders.split(',')
          console.log(oldleaders)
          console.log(newleaders)

          Group.findByIdAndUpdate(req.params.groupId, {$pull : {
            members:oldleaders
          }}).exec()
          Group.findByIdAndUpdate(req.params.groupId, {$addToSet : {
            members:newleaders
          }}).exec()
        })


        router.route('/join/:groupId/:userId').put((req, res) => {
          let userId = req.params.userId;
          let groupId = req.params.groupId;

          User.findByIdAndUpdate(userId, {$addToSet : {
            groupstheybelongto:groupId
          }}).exec()
          Group.findByIdAndUpdate(groupId, {$addToSet : {
            members:userId
          }}).exec()
        })

        router.route('/leave/:groupId/:userId').put((req, res) => {
          let userId = req.params.userId;
          let groupId = req.params.groupId;

          User.findByIdAndUpdate(userId, {$pull : {
            groupstheybelongto:groupId
          }}).exec()
          Group.findByIdAndUpdate(groupId, {$pull : {
            members:userId
          }}).exec()
        })

        router.route('/addlowertohigher/:lowerGroupId/:higherGroupId').put((req, res) => {
          Group.findByIdAndUpdate(req.params.higherGroupId, {$addToSet : {
            groupsbelow:req.params.lowerGroupId
          }}).exec()
        })


        router.get("/findgroups", (req, res, next) => {

          const items=Group.find()
          .populate('members')
          .exec(function(err,docs){
            if(err){
              console.log(err);
            }else{
              res.status(200).json({
                data: docs
              });
            }

          })})

          router.post("/creategroup", (req, res, next) => {

            let newGroup = new Group({
              _id: req.body['_id'],
              level:req.body['level'],
              images:req.body['images'],
              groupabove:req.body['groupabove'],
              members:req.body["members"],
              allmembers:req.body["members"],
              title:req.body['title'],
              description:req.body['description'],
            });

            newGroup.save((err) => {
              if(err){
                res.status(400).json({
                  message: "The Item was not saved",
                  errorMessage : err.message
                })
              }else{
                res.status(201).json({
                  message: "Item was saved successfully",
                  data:newGroup._id
                })
              }
            })
          })


          router.delete("/deleterestriction/:restrictionId", (req, res, next) => {
            Restriction.findByIdAndDelete(req.params.restrictionId)
            .exec()
          })


          router.post("/createuserrrestriction", (req, res) => {
            const restriction = new Restriction(req.body);
            console.log(restriction)
            restriction.save((err, doc) => {
              if (err) return res.json({ success: false, err });
              return res.status(200).json({
                success: true,
                data:doc
              });
            });
          });

          router.put("/addrestrictiontouser/:user/:restriction", (req, res, next) => {
            console.log("adding restriction to user",req.params.user,req.params.restriction)
            User.findByIdAndUpdate(req.params.user, {$push : {
              restrictions:req.params.restriction
            }}).exec(function(err,docs){
              if(err){
                console.log(err);
              }else{

                res.status(200).json({
                  data:docs,
                  message: "User updated successfully"
                })
              }
            })
          })


          router.put("/removerestrictionfromuser/:user/:restriction", (req, res, next) => {
            console.log("removing restriction from user",req.params.user,req.params.restriction)
            User.findByIdAndUpdate(req.params.user, {$pull : {
              restrictions:req.params.restriction
            }}).exec(function(err,docs){
              if(err){
                console.log(err);
              }else{

                res.status(200).json({
                  data:docs,
                  message: "User updated successfully"
                })
              }
            })
          })

          router.get("/findreviews/:groupId/:userId", (req, res, next) => {
            console.log("ids in server",req.params.userId)

            const items=Review.find({groupId:req.params.groupId, userId:req.params.userId})
            .exec(function(err,docs){
              if(err){
                console.log(err);
              }else{
                res.status(200).json({
                  data: docs
                });
              }

            })})


            router.post('/sendemailnotification', (req, res, next) => {
              console.log("send email notfication")

              if(req.body.emails.length>0){
                const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                  }
                })
                const optionsArray=req.body.emails.map(email=>{
                  const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: req.body.subject,
                    text: req.body.message
                  };
                  return mailOptions
                })

                optionsArray.forEach(sendEmails)

                function sendEmails(item){
                  transporter.sendMail(item, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  })

                }
              }})


              router.get("/finduserrestrictions/:userId", (req, res, next) => {
                const items=User.findById(req.params.userId)
                .populate('restrictions')
                .exec(function(err,docs){
                  if(err){
                    console.log(err);
                  }else{
                    res.status(200).json({
                      data: docs
                    });
                  }
                })})





                router.get("/getuser/:userId", (req, res, next) => {
                  var userId=req.params.userId
                  console.log("userId in router",userId)
                  const items=User.findById(userId)
                  .populate("recentprivatemessages")
                  .populate("restrictions")
                  .exec(function(err,docs){
                    if(err){
                      console.log(err);
                    }else{

                      res.status(200).json({
                        data:docs,
                        message: "fetching user"
                      })
                    }
                  })
                })





                router.post("/createuser", (req, res, next) => {
                  var user=req.body.user
                  let newUser = new User(user);

                  console.log("new user in server",newUser)
                  newUser.save((err,docs) => {
                    if(err){
                      console.log(err)
                      res.status(400).json({
                        message: "The Item was not saved",
                        errorMessage : err.message
                      })
                    }else{
                      console.log("DOCS",docs)
                      res.status(201).json({
                        message: "Item was saved successfully",
                        data:docs
                      })
                    }
                  })

                })

                router.put("/updateuser/:user", (req, res, next) => {
                  User.findByIdAndUpdate(req.params.user, req.body).exec(function(err,docs){
                    if(err){
                      console.log(err);
                    }else{

                      res.status(200).json({
                        data:docs,
                        message: "User updated successfully"
                      })
                    }
                  })
                })



                module.exports= router
