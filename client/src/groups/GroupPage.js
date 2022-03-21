import React, { Component } from 'react';
import {Link} from "react-router-dom";
import auth from './../auth/auth-helper'
import Newsfeed from './../post/Newsfeed'
import Events from './Events'
import Leaders from './Leaders'
import Rules from './Rules'
import Jury from './Jury'
import Polls from './Polls'
import GroupDetails from './GroupDetails'
import ChatPage from "./../ChatPage/ChatPage"
import Kmeans from 'node-kmeans';
import {Image} from 'cloudinary-react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import io from "socket.io-client";
import {Redirect} from 'react-router-dom'
const mongoose = require("mongoose");


class GroupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      location:"",
      centroid:"",
      title:"",
      allmembers:[],
      allgroupsbelow:[],
      error:'',
      higherlevelgroup:'',
      newLowerGroupIds:[],
      id:'',
      inthisgroup:false,
      members:[],
      level:0,
      group:{},
      users:[],
      associatedlocalgroups:[],
      redirect: false,
      updating:false,
      cannotpost:false,
      cannotusechat:false,
      cannotseeevents:false,
      cannotvoteforleaders:false,
      cannotparticipateingrouppurchases:false,
      removefromgroup:false,
      cannotcreatepolls:false,
      cannotsuggestrulesorvoteforrules:false,
      cannotseegigleads:false,
      cannotvoteinjury:false
    }
    this.updateUser=this.updateUser.bind(this)
    let socket
  }



  componentDidMount(){
    this.getGroupData()
    let server = "http://localhost:5000";
    if(process.env.NODE_ENV=="production"){
      this.socket=io();
    }
    if(process.env.NODE_ENV=="development"){
      this.socket=io(server);
    }
  }

  updateUser(updatedUser){
console.log("updateing user",updatedUser)
    this.setState({user:updatedUser})

    let restrictions=updatedUser.restrictions

    for (let restriction of restrictions){

      if((restriction.restriction=="cannot post")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({cannotpost:true})
      }
      if((restriction.restriction=="cannot use chat")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({cannotusechat:true})
      }
      if((restriction.restriction=="cannot vote for leaders")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({cannotvoteforleaders:true})
      }
      if((restriction.restriction=="cannot see events")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({cannotseeevents:true})
      }
      if((restriction.restriction=="remove from group")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({removefromgroup:true})
      }
      if((restriction.restriction=="cannot create polls")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({cannotcreatepolls:true})
      }
      if((restriction.restriction=="cannot suggest rules or vote for rules")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({cannotsuggestrulesorvoteforrules:true})
      }

      if((restriction.restriction=="cannot vote in jury")&&(restriction.groupIds.includes(this.props.match.params.groupId))){
        this.setState({cannotvoteinjury:true})
      }
    }}

    async getGroupData(){
      let user=await fetch(`/groups/getuser/`+auth.isAuthenticated().user._id)
      .then(response => response.json())
      .catch(error=>console.error(error))
      this.updateUser(user.data)

      await fetch(`/groups/findgroup/`+this.props.match.params.groupId)
      .then(response => response.json())
      .then(data=>{

        let activeusers=data['data'][0]['members']
        activeusers=activeusers.filter(user=>user.active)

        this.setState({
          users:activeusers,
          group:data['data'][0],
          level:data['data'][0]['level'],
          loading:true
        })
      })
      .catch(err => {
        console.error(err);
      })
    }




  render() {
    let joinOrLeave=<></>

if(auth.isAuthenticated()){
    let memberids=this.state.users.map(item=>{return item._id})

    if(this.state.level==0){
      if(memberids.includes(auth.isAuthenticated().user._id)){
        joinOrLeave=<><button className="leavebutton" style={{display:"block"}} onClick={(e)=>this.leave(e)}>Leave Group?</button></>
      }else{
        joinOrLeave=<><button className="joinbutton" style={{display:"block"}} onClick={(e)=>this.join(e)}>Join Group?</button></>
      }
    }
}
    return (
      <>
      <div style={{width:"100vw",overflowX:"hidden"}}>
      {!auth.isAuthenticated()&&<Redirect to='/'/>}
      {this.state.removefromgroup&&<h2 style={{margin:"5vw",width:"90vw"}}>You have been removed from this group. See your profile page
        for an explanation</h2>}
      {!this.state.removefromgroup&&<>
        {auth.isAuthenticated()&&<>
        {this.state.loading&&<>
          <Tabs className="tabs">
          <h1 style={{margin:"0.5vw"}}>{this.state.group.title}</h1>
          <h4 style={{margin:"0.5vw"}} className="activemembers">Members</h4>
          {this.state.users&&this.state.users.map(item=>{return(
            <><button style={{display:"inline"}}><Link to={"/singleuser/" + item._id}>{item.name}</Link></button></>
          )})}
          {(this.state.users.length<=50)&&joinOrLeave}
          {this.state.error&&<p className="toomanygroupserror" style={{color:"red"}}>{this.state.error}</p>}
          {(this.state.users.length>50)&&<h4 style={{margin:"0.5vw"}} className="activemembers">This group is full, the maximum number of members in all groups is 50</h4>}

          <TabList>
          {!this.state.cannotpost&&<Tab><div className="news">News</div></Tab>}
          <Tab>Group Details</Tab>
          {(auth.isAuthenticated().user.cool&&!this.state.cannotvoteforleaders)&&<Tab><div className="leaders">Leaders</div></Tab>}
          {!this.state.cannotcreatepolls&&<Tab><div className="polls">Polls</div></Tab>}
          {!this.state.cannotsuggestrulesorvoteforrules&&<Tab><div className="rules">Rules</div></Tab>}
          {!this.state.cannotseeevents&&<Tab><div className="events">Events</div></Tab>}
          {!this.state.cannotvoteinjury&&<Tab><div className="jury">Jury</div></Tab>}
          </TabList>

          {!this.state.cannotpost&&<TabPanel>
            <Newsfeed users={this.state.users} groupId={this.props.match.params.groupId} groupTitle={this.state.group.title} group={this.state.group}/>
            </TabPanel>}
            <TabPanel>
            <GroupDetails users={this.state.users} group={this.state.group}/>
            </TabPanel>
            {(auth.isAuthenticated().user.cool&&!this.state.cannotvoteforleaders)&&<TabPanel>
              <Leaders users={this.state.users} group={this.state.group}/>
              </TabPanel>}
              {!this.state.cannotcreatepolls&&<TabPanel>
                <Polls users={this.state.users} groupId={this.props.match.params.groupId} group={this.state.group}/>
                </TabPanel>}
                {!this.state.cannotsuggestrulesorvoteforrules&&<TabPanel>
                  <Rules users={this.state.users} groupId={this.props.match.params.groupId} group={this.state.group}/>
                  </TabPanel>}
                  {!this.state.cannotseeevents&&<TabPanel>
                    <Events users={this.state.users} groupId={this.props.match.params.groupId} group={this.state.group}/>
                    </TabPanel>}
                    {!this.state.cannotvoteinjury&&<TabPanel>
                      <Jury users={this.state.users} groupId={this.props.match.params.groupId} updateUser={this.updateUser} group={this.state.group}/>
                      </TabPanel>}
                      </Tabs>

                      {(this.state.users&&!this.state.cannotusechat)&&<ChatPage users={this.state.users} grouptitle={this.state.group.title} groupId={this.props.match.params.groupId}/>}</>
                    }</>}
                    </>}
                    </div>
                    </>

                  );
                }
              }



              export default GroupPage;
