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
             cannotparticipateingrouppurchases:false,
             removefromgroup:false,
             cannotcreatepolls:false,
             cannotsuggestrulesorvoteforrules:false,
             cannotseegigleads:false,
             cannotvoteinjury:false
           }
           this.updateUser=this.updateUser.bind(this)
              }

           componentDidMount(){
             this.getGroupData()
             }

             updateUser(updatedUser){
               console.log("update user above",updatedUser)
                   this.setState({user:updatedUser})
                   console.log("USER",updatedUser)
                   let restrictions=updatedUser.restrictions
                   console.log("RESTRICTIONS",restrictions)
                   for (let restriction of restrictions){
                     console.log("RESTRICTIoN",restriction)
                     if((restriction.restriction=="cannot post")&&(restriction.groupId==this.props.match.params.groupId)){
                       this.setState({cannotpost:true})
                     }
                     if((restriction.restriction=="cannot use chat")&&(restriction.groupId==this.props.match.params.groupId)){
                       this.setState({cannotusechat:true})
                     }
                     if((restriction.restriction=="cannot see events")&&(restriction.groupId==this.props.match.params.groupId)){
                       this.setState({cannotseeevents:true})
                     }

                     if((restriction.restriction=="remove from group")&&(restriction.groupId==this.props.match.params.groupId)){
                       this.setState({removefromgroup:true})
                     }
                     if((restriction.restriction=="cannot create polls")&&(restriction.groupId==this.props.match.params.groupId)){
                       this.setState({cannotcreatepolls:true})
                     }
                     if((restriction.restriction=="cannot suggest rules or vote for rules")&&(restriction.groupId==this.props.match.params.groupId)){
                       this.setState({cannotsuggestrulesorvoteforrules:true})
                     }

                     if((restriction.restriction=="cannot vote in jury")&&(restriction.groupId==this.props.match.params.groupId)){
                       this.setState({cannotvoteinjury:true})
                     }
            }}

           async getGroupData(){
             let user=await fetch(`/groups/getuser/`+auth.isAuthenticated().user._id)
             .then(response => response.json())
             .catch(error=>console.log(error))
             this.updateUser(user.data)

             await fetch(`/groups/findgroup/`+this.props.match.params.groupId)
                 .then(response => response.json())
                 .then(data=>{
                   console.log("group!!!!!!!!!!",data['data'][0])
                   this.setState({
                   users:data['data'][0]['members'],
                   group:data['data'][0],
                   level:data['data'][0]['level'],
                   loading:true
                 })
                 })
           }

leave(e){
  var memberscopy=JSON.parse(JSON.stringify(this.state.users))
  var filteredarray = memberscopy.filter(function( obj ) {
  return obj._id !== auth.isAuthenticated().user._id;
  });
  let groupcopy=JSON.parse(JSON.stringify(this.state.group))
  groupcopy.members=filteredarray
  this.setState({users:filteredarray,group:groupcopy});

const options = {
  method: 'put',
  headers: {
    'Content-Type': 'application/json'
  },
     body: ''
}

fetch("/groups/leave/"+this.props.match.params.groupId+"/"+ auth.isAuthenticated().user._id, options
)  .then(res => {
console.log(res);
}).catch(err => {
console.log(err);
})
}

async join(e){
  let memberscopy=JSON.parse(JSON.stringify(this.state.users))
  memberscopy.push(auth.isAuthenticated().user)
  let groupcopy=JSON.parse(JSON.stringify(this.state.group))
  groupcopy.members=memberscopy

  this.setState({users:memberscopy,group:groupcopy});


let us=await fetch("/groups/finduser/"+auth.isAuthenticated().user._id)
.then(res => res.json())
.then(data => data.data)
.catch(err => {
console.log(err);
})
us=us[0]
console.log("USER",us.groupstheybelongto)

const options = {
  method: 'put',
  headers: {
    'Content-Type': 'application/json'
  },
     body: ''
}

if(us.groupstheybelongto.length>=3){
  let index=us.groupstheybelongto.length-1
  fetch("/groups/leave/"+us['groupstheybelongto'][index]['_id']+"/"+ auth.isAuthenticated().user._id, options
  )  .then(res => {
  console.log(res);
  }).catch(err => {
  console.log(err);
  })
}

fetch("/groups/join/"+this.props.match.params.groupId+"/"+ auth.isAuthenticated().user._id, options
)  .then(res => {
console.log(res);
}).catch(err => {
console.log(err);
})
}


  render() {

    let joinOrLeave=<h1></h1>
    var memberids=this.state.users.map(item=>{return item._id})
    console.log(auth.isAuthenticated().user._id)
    if(this.state.level==0){
            if(memberids.includes(auth.isAuthenticated().user._id)){
              joinOrLeave=<><button style={{display:"block"}} onClick={(e)=>this.leave(e)}>Leave Group?</button></>
            }else{
                joinOrLeave=<><button style={{display:"block"}} onClick={(e)=>this.join(e)}>Join Group?</button></>
            }
    }

    return (
      <>
      {this.state.loading&&<>
      <Tabs className="tabs">
      <br/>
      <h1>{this.state.group.title}</h1>
      <h4 className="activemembers">Active Members</h4>
      {this.state.users&&this.state.users.map(item=>{return(
        <><button style={{display:"inline"}}><Link to={"/singleuser/" + item._id}>{item.name}</Link></button></>
      )})}
      {(this.state.users.length<=50)&&joinOrLeave}
      {(this.state.users.length>50)&&<h4 className="activemembers">This group is full, the maximum number of members in all groups is 50</h4>}
      <br/>

         <TabList >
           {!this.state.cannotpost&&<Tab>News</Tab>}
           <Tab>Group Details</Tab>
           <Tab>Leaders</Tab>
           {!this.state.cannotcreatepolls&&<Tab>Polls</Tab>}
           {!this.state.cannotsuggestrulesorvoteforrules&&<Tab>Rules</Tab>}
           {!this.state.cannotseeevents&&<Tab>Events</Tab>}
           {!this.state.cannotvoteinjury&&<Tab>Jury</Tab>}
           </TabList>




        {!this.state.cannotpost&&<TabPanel>
         <Newsfeed users={this.state.users} groupId={this.props.match.params.groupId} groupTitle={this.state.group.title} group={this.state.group}/>
         </TabPanel>}
         <TabPanel>
          <GroupDetails users={this.state.users} group={this.state.group}/>
          </TabPanel>
          <TabPanel>
           <Leaders users={this.state.users} group={this.state.group}/>
           </TabPanel>
         {!this.state.cannotcreatepolls&&<TabPanel>
         <Polls users={this.state.users} groupId={this.props.match.params.groupId}/>
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

       <div style={{margin:"4vw"}}>
       <h6>How would you improve The Democratic Social Network? What do you think should be in a web application like this?
       This app is an experiment, surely there are ways it can be improved. Please email any constructive criticism to Julianbullmagic@gmail.com.
       We would like to create this software in a similar way to the Cuban constitution. It was drafted from a very extensive
       process of public consultation and discussion with the majority of the Cuban population and then submitted for approval by referendum.
       No Capitalist country has ever done this, the constitution is usually written by elites and then imposed on the population.
       </h6>
       </div>
       <br/>

       {(this.state.users&&!this.state.cannotusechat)&&<ChatPage users={this.state.users} groupId={this.props.match.params.groupId}/>}</>
     }
      </>
    );
  }
}



export default GroupPage;
