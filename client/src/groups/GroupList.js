import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { MapContainer, TileLayer,Circle} from 'react-leaflet'
import auth from './../auth/auth-helper'
import {Image} from 'cloudinary-react'
import CreateGroupForm from '../groups/CreateGroupForm'

var geodist = require('geodist')

class GroupsList extends Component {


  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      mygroups:[],
      user:{},
      page:1,
      pageNum:[],
      viewform:false,
      currentPageData:[],
    }

    this.viewAllGroups=this.viewAllGroups.bind(this)
    this.updateGroups=this.updateGroups.bind(this)

  }
  componentDidMount(){
    this.viewAllGroups()
  }

  updateGroups(newgroup){
    var groupscopy=JSON.parse(JSON.stringify(this.state.groups))
    groupscopy.reverse()
    groupscopy.push(newgroup)
    groupscopy.reverse()
    this.setState({groups:groupscopy})
  }

  viewAllGroups(){

    fetch(`/groups/finduser/`+auth.isAuthenticated().user._id)
    .then(response => response.json())
    .then(data=>{
      console.log("USER",data)
      this.setState({user:data.data[0]})
    })

    fetch('/groups/findgroups').then(res => {
      return res.json();
    }).then(blob => {
      let groups=JSON.parse(JSON.stringify(blob.data))
      this.setState({groups:groups})
      console.log("blob groups",blob.data)
    })
  }


  render() {

    var groupsmapped=<h3>no groups</h3>


    if(this.state.groups){groupsmapped=this.state.groups.map(item => {

      return(
        <>
        <Link className="gotogroup" exact to={"/group/" + item._id}>
        <div className="groupdiv" key={item._id}>
        <div>
        {item.title&&<h2>Title: {item.title&&item.title}</h2>}
        {item.description&&<h3>Description: {item.description}</h3>}
        {item.location&&<h3>Location: {item.location}</h3>}
        <h3>Level: {item.level}</h3>
        {item.images.length>0&&<Image style={{objectFit:"cover",width:"100%",height:"100%",overflow:"hidden",
        position:"relative",boxShadow:"2px 2px 2px 4px #050A30"}}
        cloudName="julianbullmagic" publicId={item.images[0]} />}
        </div>
        </div>
        </Link>
        </>
      )
    })}




    let mygroupsmapped=[]
    console.log("this.state.user",this.state.user)
    let nogroups=true
    if(this.state.user){
      if(this.state.user.groupstheybelongto){
        if(this.state.user.groupstheybelongto.length>0){nogroups=false}
        mygroupsmapped=this.state.user.groupstheybelongto.map(item => {
          return(
            <>
            <div style={{width:"25vw"}} className="groupdiv" key={item._id}>
            <Link className="gotogroup" exact to={"/group/" + item._id}>
            <div>
            {item.title&&<h2>Title: {item.title&&item.title}</h2>}
            {item.description&&<h3>Description: {item.description}</h3>}
            {item.location&&<h2>Location: {item.location}</h2>}
            <h3>Level: {item.level}</h3>
            {item.images.length>0&&<Image style={{objectFit:"cover",width:"100%",height:"100%",overflow:"hidden",
            position:"relative",boxShadow:"2px 2px 2px 4px #050A30"}}
            cloudName="julianbullmagic" publicId={item.images[0]} />}

            </div></Link>
            </div>
            </>
          )
        })
      }
    }

    return (
      <React.Fragment>
      <div>
      <h1 style={{marginBottom:"0vh",paddingBottom:"0vh"}}>Groups</h1>
      </div>
      <div>
      <button onClick={(e) => this.setState({viewform:!this.state.viewform})}>View Create Group Form?</button>
      </div>
      <div style={{marginTop:"1vw",marginBottom:"1vw",maxHeight:!this.state.viewform?"0":"100vw",overflow:"hidden",transition:"max-height 2s"}}>
      <CreateGroupForm  updateGroups={this.updateGroups} user={this.state.user}/>
      </div>


      <div className='yourgroups'>
      <div className='groupdivtwo'>
      <h2 style={{marginLeft:"2.5vw"}}>Your Groups</h2>
      </div>
      <div style={{display:"flex"}}>
      {nogroups&&<h4 style={{marginLeft:"2.5vw"}}>You haven't join any groups yet, click on the group link below.
      You can only join a maximum of three bottom level groups. If you leave one group, your votes are still recorded but not counted.
      If you choose to rejoin, they will count again.</h4>}
      {mygroupsmapped}
      </div>
      </div>
      <section className='groupsbox'>
      <div className='groupscol1'>
      <div className='groupdivtwo'>
      <h2 style={{marginLeft:"2.5vw"}}>All Groups</h2>
      </div>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {groupsmapped}
      </div>
      </div>
      </section>

      </React.Fragment>
    );
  }
}

export default GroupsList;
