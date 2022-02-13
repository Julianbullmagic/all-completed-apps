import React, { Component } from 'react';
import {Image} from 'cloudinary-react'
import CreateRuleForm from './CreateRuleForm'
import auth from './../auth/auth-helper'
import io from "socket.io-client";
const mongoose = require("mongoose");

let leaders=[]

export default class Leaders extends Component {

  constructor(props) {
    super(props);
    for (let user of props.users){
      if(props.group.groupabove){
        if (props.group.groupabove.members.includes(user._id)){

          leaders.push(user)
        }
      }
    }
    leaders=[...new Set(leaders)]

    this.state = {
      users:props.users,
      group:props.group,
      leaders:leaders,
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
    for (let user of this.state.users){
      if(this.state.group.groupabove){
        if (this.state.group.groupabove.members.includes(user._id)){
          leaders.push(user)
        }
      }
    }

    leaders=[...new Set(leaders)]

    this.setState({leaders:leaders})
  }


  approveofuser(e,id){

    var userscopy=JSON.parse(JSON.stringify(this.state.users))
    let vote=`${this.state.group.title},${this.state.group.level},${auth.isAuthenticated().user._id}`

    for (let user of userscopy){
      let splitvote=`${this.state.group.title},${this.state.group.level}`
      if(!user.votes){
        user.votes=[]
      }
      if (user.votes){
        user.votes=user.votes.filter(item=>item.startsWith(splitvote))
      }
    }
    let numreps=Math.round(userscopy.length/25)





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


    fetch("/leaders/voteforleader/" + id +"/"+ vote, options
  ).then(res => {

  }).catch(err => {
    console.error(err);
  })

  for (let user of this.state.users){
    if (this.state.group.groupabove.members.includes(user._id)){
      leaders.push(user)
    }
  }
  leaders=[...new Set(leaders)]

  this.setState({leaders:leaders})

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

}).catch(err => {
  console.error(err);
})

}





render(props) {

  let userscomponent
  if (this.state.users){

    userscomponent=this.state.users.map(item => {
      let splitvote=`${this.state.group.title},${this.state.group.level}`

      if(!item.votes){
        item.votes=[]
      }

      if(item.votes){
        item.votes=item.votes.filter(item=>item.startsWith(splitvote))

      }
      let vote=`${this.state.group.title},${this.state.group.level},${auth.isAuthenticated().user._id}`

      let votees=[]



      if(item.votes.length>0){
        for (let vote of item.votes){
          let splitvote=vote.split(',')

          for (let user of this.state.users){
            if (user._id==splitvote[2]){

              votees.push(user.name)
            }
          }
        }
      }


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
      {this.state.group.level==2&&<h4>The highest level group, Australia, has no singular leader, prime minister, president or chancellor</h4>}

      {this.state.leaders.length>0&&this.state.leaders.map(item=><><div className="leader"><h3 style={{margin:"0.5vw"}}>{item.name}</h3></div></>)}
      {this.state.leaders.length==0&&<h4>No leaders</h4>}
      {this.state.users.length<13&&<><p>The number of leaders each group gets is equal to the number of members divided by
        25 rounded to the nearest integer. Groups with less than 13 members will not have any leaders. Between 13 and 38
        member groups have 1 leader and between 39 and 50 member groups have 2.</p>
        <p>You can still vote for people in this group, these will be recorded in the database and counted if the group
        should become large enough.</p></>
      }
      Representatives from higher level groups are not allowed to nominate or endorse candidates in lower level groups.
      This helps to ensure a genuine grassroots organization. There are no election campaigns on this
      web application. However, you can post a resume in your group for other members to look at and evalutate your credentials. This
      is intended to create a genuine meritocracy, the choice of leaders or experts should be purely based on their skill, experience,
      trustworthyness, moral integrity and
      knowledge, not on how much money they have to spend on a political marketing campaigns or how much control they have over the media.
      In order to prevent a situation where people get selected simply because they were first to get any votes, all elected leaders
      must receive at least 75% approval from their group and the most popular members above this threshold can become representatives.
      When you choose who to vote for, try to priortise their actual credentials instead of whether or not you like them personally.
      The democratic social network tries to prevent demagoguery. This is a phenomenon where people gain influence simply with charm
      and charisma, while they may not actual have the competence for leadership. A demagogue is sort of like a sociopath,
      very manipulative and cunning, but the term
      refers particularly to political leaders. It is nice if leaders are likeable and friendly, but
      this should not be the priority. A real leader tells you what you need to hear, not just what you want to hear.

      <hr/>
      {inthisgroup&&<><h3>Vote for Members</h3>
        {this.state.users.length<1&&<h4>No members</h4>}
        {userscomponent}</>}
        </>
      );
    }
  }
