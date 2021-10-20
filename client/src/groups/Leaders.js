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


           componentDidMount(props){
             let server = process.env.PORT||"http://localhost:5000";
             this.socket = io(server);
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

                for (var user of userscopy){
                     let groupidentifier=`${this.state.group.title},${this.state.group.level}`
                     console.log("groupidentifier",groupidentifier)
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
         console.log(this.state.group)
var userscopy=JSON.parse(JSON.stringify(this.state.users))
let vote=`${this.state.group.title},${this.state.group.level},${auth.isAuthenticated().user._id}`

for (let user of userscopy){
     let splitvote=`${this.state.group.title},${this.state.group.level}`
     user.votes=user.votes.filter(item=>item.startsWith(splitvote))
  }
let numreps=Math.round(userscopy.length/25)
console.log("numreps",numreps)



console.log()
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
  {votees.length>0&&<h4 style={{display:'inline'}}>People who voted: </h4>}
  {votees&&votees.map(item=>{return(<><p style={{display:'inline'}}>{item} </p></>)})}
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
      {this.state.leaders&&this.state.leaders.map(item=><><div className="leader"><h3>{item.name}</h3></div></>)}
      <hr/>
      {inthisgroup&&<><h3>Vote for Members</h3>
            {this.state.users.length<1&&<h4>No members</h4>}
            {userscomponent}</>}
      </>
    );
  }
}
