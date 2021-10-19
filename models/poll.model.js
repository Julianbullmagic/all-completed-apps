const mongoose =require( 'mongoose')
const PollSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  pollquestion: {type: String},
  local:{type:Boolean,default:false},
  groupId:{type: mongoose.Schema.ObjectId, ref: 'Group'},
  suggestions: [{type: mongoose.Schema.ObjectId, ref: 'Suggestion'}],
  comments: [{type: mongoose.Schema.ObjectId, ref: 'Comment'}],
  createdby: {type: mongoose.Schema.ObjectId, ref: 'User'},
  notificationsent:{type:Boolean,default:false},
  timecreated: Number
})

module.exports=mongoose.model('Poll', PollSchema)
