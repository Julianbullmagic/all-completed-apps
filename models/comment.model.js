const mongoose =require( 'mongoose')
const commentSchema = new mongoose.Schema({
  comment: {type: String},
  postid:{type: String},
  email:{type: String},
  name:{type: String},
  identifier:{type: String},
  createdby: {type: mongoose.Schema.ObjectId, ref: 'User'},
  timecreated: Number
})

module.exports=mongoose.model('Comment', commentSchema)
