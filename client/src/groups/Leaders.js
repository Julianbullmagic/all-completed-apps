import React, { Component } from 'react';
import {Image} from 'cloudinary-react'
import CreateRuleForm from './CreateRuleForm'
import auth from './../auth/auth-helper'
import io from "socket.io-client";

const mongoose = require("mongoose");


export default class Leaders extends Component {

    constructor(props) {
           super(props);
           this.state = {
             users:props.users,
             group:props.group,
             leaders:[],
             redirect: false,
             updating:false,
             participate:props.participate
           }
}


             componentWillReceiveProps(nextProps) {
               let userscopy=JSON.parse(JSON.stringify(nextProps.users))

                if (nextProps.users !== this.props.users) {

                  this.setState({
                    users:userscopy
                  });
                }

                if (nextProps.group !== this.props.group) {

                  this.setState({
                    group:nextProps.group
                  });
                }

                for (let user of userscopy){
                     let groupidentifier=`${this.state.group.title},${this.state.group.level}`
                     console.log("groupidentifier",groupidentifier,user)
                     user.votes=user.votes.filter(item=>!item.startsWith(groupidentifier))
                     console.log("USER.VOTES!!!!!!",user.votes)
                 }
                 userscopy.sort((a, b) => (a.votes.length < b.votes.length) ? 1 : -1)


                 let numreps=Math.round(userscopy.length/25)
                 console.log("numreps",numreps)
                 let leaders=userscopy.slice(0,numreps)
                 this.setState({leaders:leaders})
              }


       approveofuser(e,id){
         console.log("approving of user",this.state.group,id)
var userscopy=JSON.parse(JSON.stringify(this.state.users))
let vote=`${this.state.group.title},${this.state.group.level},${auth.isAuthenticated().user._id}`
console.log(vote)
for (let user of userscopy){
     let splitvote=`${this.state.group.title},${this.state.group.level}`
     user.votes=user.votes.filter(item=>item.startsWith(splitvote))
  }
let numreps=Math.round(userscopy.length/25)
console.log("numreps",numreps)



console.log(userscopy)
for (let user of userscopy){
  if (user._id==id){
 if(!user.votes.includes(vote)){
     user.votes.push(vote)
     let splitvote=vote.split(',')
     splitvote.pop()
     splitvote.join(",")
     user.votes=user.votes.filter(item=>item.startsWith(splitvote))
   }
  }
 }

 userscopy.sort((a, b) => (a.votes.length < b.votes.length) ? 1 : -1)

 let leaders=userscopy.slice(0,numreps)
 this.setState({leaders:leaders})


 const options = {
   method: 'put',
   headers: {
     'Content-Type': 'application/json'
   },
      body: ''
 }


this.setState({users:userscopy})

console.log("/leaders/voteforleader/" + id +"/"+ vote)
         fetch("/leaders/voteforleader/" + id +"/"+ vote, options
).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })



}


       withdrawapprovalofuser(e,id){
         var userscopy=JSON.parse(JSON.stringify(this.state.users))

           let vote=`${this.state.group.title},${this.state.group.level},${auth.isAuthenticated().user._id}`


         for (var user of userscopy){
           if (user._id==id){
             var filteredapproval=user.votes.filter(voted=>!(voted==vote))
             user.votes=filteredapproval
           }
         }
         userscopy.sort((a, b) => (a.votes.length < b.votes.length) ? 1 : -1)

         this.setState({users:userscopy})

         const options = {
           method: 'put',
           headers: {
             'Content-Type': 'application/json'
           },
              body: ''
         }

         fetch("/leaders/withdrawvoteforleader/" + id +"/"+ vote, options
) .then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })

       }





  render(props) {

let userscomponent
if (this.state.users){

    userscomponent=this.state.users.map(item => {
      let splitvote=`${this.state.group.title},${this.state.group.level}`
      item.votes=item.votes.filter(item=>item.startsWith(splitvote))
      let vote=`${this.state.group.title},${this.state.group.level},${auth.isAuthenticated().user._id}`

      let votees=[]
      for (let vote of item.votes){
        let splitvote=vote.split(',')
        console.log("splitvote",splitvote)
        for (let user of this.state.users){
          if (user._id==splitvote[2]){
            console.log("vote",user.name)
            votees.push(user.name)
          }
        }

      }
console.log("VOTEES",votees)
    return(
  <>
  <div className="rule">
  <h3 className="ruletext">{item.name}  </h3>
  {(!item.votes.includes(vote))&&<button style={{display:'inline'}} className="ruletext" onClick={(e)=>this.approveofuser(e,item._id)}>Vote For This Person?</button>}
  {(item.votes.includes(vote))&&<button style={{display:'inline'}} className="ruletext" onClick={(e)=>this.withdrawapprovalofuser(e,item._id)}>Withdraw Vote?</button>}
  {votees.length>0&&<p style={{display:'inline'}}>People who voted: </p>}
  {votees&&votees.map((item,index)=>{return(<><p style={{display:'inline'}}>{item}{(index<(votees.length-2))?", ":(index<(votees.length-1))?" and ":"."}</p></>)})}
  </div>
</>
)})
}

let inthisgroup=this.state.group.members.map(item=>item._id)
inthisgroup=inthisgroup.includes(auth.isAuthenticated().user._id)

    return (
      <>
      <br />
      <h2>Group Leaders</h2>
      {this.state.leaders.length<1&&<h4>No leaders</h4>}
      {this.state.users.length<13&&<><p>The number of leaders each group gets is equal to the number of members divided by
        25 rounded to the nearest integer. Groups with less than 13 members will not have any leaders. Between 13 and 38
        member groups have 1 leader and between 39 and 50 member groups have 2.</p>
        <p>You can still vote for people in this group, these will be recorded in the database and counted if the group
        should become large enough.</p></>
      }

      {this.state.leaders&&this.state.leaders.map(item=><><div className="leader"><h3>{item.name}</h3></div></>)}
      <hr/>
      {inthisgroup&&<><h3>Vote for Members</h3>
            {this.state.users.length<1&&<h4>No members</h4>}
            {userscomponent}</>}
      </>
    );
  }
}
