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
      allgroups:[],
      mygroups:[],
      user:{},
      page:1,
      pageNum:[],
      viewform:false,
      currentPageData:[],
    }

    this.viewAllGroups=this.viewAllGroups.bind(this)
    this.updateGroups=this.updateGroups.bind(this)
    this.searchGroups=this.searchGroups.bind(this)
    this.handleSearchChange=this.handleSearchChange.bind(this)
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

  searchGroups(event){
    console.log("searching groups")
    if(this.state.searchterm.length>0){
      let groupscopy=JSON.parse(JSON.stringify(this.state.allgroups))
      console.log(groupscopy,this.state.searchterm.toLowerCase())

      groupscopy=groupscopy.filter(item=>item.title.toLowerCase().includes(this.state.searchterm.toLowerCase()))
      console.log(groupscopy)
      this.setState({groups:groupscopy})
    }
    if(this.state.searchterm.length==0){
      this.setState({groups:this.state.allgroups})
    }
  }

  handleSearchChange(event) {
  console.log(event.target.value);
  this.setState({searchterm:event.target.value})
}

  viewAllGroups(){

    fetch(`/groups/finduser/`+auth.isAuthenticated().user._id)
    .then(response => response.json())
    .then(data=>{
      console.log("USER",data)
      this.setState({user:data.data[0]})
    })

    fetch('/groups/findgroups/'+auth.isAuthenticated().user.cool).then(res => {
      return res.json();
    }).then(blob => {
      let groups=JSON.parse(JSON.stringify(blob.data))
      this.setState({groups:groups,allgroups:groups})
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
        {item.title&&<h3 style={{margin:"0vw",padding:"0vw",overflowX:"hidden"}}>Title: {item.title&&item.title}</h3>}
        {item.location&&<h4 style={{margin:"0vw",padding:"0vw",overflow:"hidden"}}>Location: {item.location}</h4>}
        <h4 style={{margin:"0vw",padding:"0vw"}}>Level: {item.level}</h4>
        </div>
        </div>
        </Link>
        </>
      )
    })}




    let mygroupsmapped=[]
    console.log("this.state.user",this.state.user)
    let nogroups=false
    if(this.state.user){
      if(this.state.user.groupstheybelongto){
        if(this.state.user.groupstheybelongto.length==0){nogroups=true}
        mygroupsmapped=this.state.user.groupstheybelongto.map(item => {

          return(
            <>
            <div className="groupdiv" key={item._id}>
            <Link style={{margin:"0vw",padding:"0vw"}} className="gotogroup" exact to={"/group/" + item._id}>
            <div style={{margin:"0vw",padding:"0vw"}}>
            {item.title&&<h3 style={{margin:"0vw",padding:"0vw",overflowX:"hidden"}}>Title: {item.title&&item.title}</h3>}
            {item.location&&<h4 style={{margin:"0vw",padding:"0vw",overflow:"hidden"}}>Location: {item.location}</h4>}
            <h4  style={{margin:"0vw",padding:"0vw"}}>Level: {item.level}</h4>
            </div></Link>
            </div>
            </>
          )
        })
      }
    }

    return (
      <React.Fragment>
      <div style={{padding:"0.5vw",margin:"0vw"}}>
      <h1 style={{padding:"0vw",margin:"0vw"}}>Groups</h1>
      </div>
      <div>
      <button style={{}} onClick={(e) => this.setState({viewform:!this.state.viewform})}>View Create Group Form?</button>
      </div>
      <div style={{marginTop:"1vw",marginBottom:"0.5vw",maxHeight:!this.state.viewform?"0":"100vw",overflow:"hidden",transition:"max-height 2s"}}>
      <CreateGroupForm  updateGroups={this.updateGroups} groups={this.state.groups} user={this.state.user}/>
      </div>


      <div className='yourgroups'>
      <div className='groupdivtwo'>
      <h2 style={{marginLeft:"2.5vw",margin:"0.5vw"}}>Your Groups</h2>
      </div>
      <div style={{display:"flex"}}>
      {nogroups&&<h4 style={{marginLeft:"2.5vw",margin:"0.5vw"}}>You haven't join any groups yet, click on the group link below.
      You can only join a maximum of three bottom level groups. If you leave one group, your votes are still recorded but not counted.
      If you choose to rejoin, they will count again.</h4>}
      {mygroupsmapped}
      </div>
      </div>
      <section className='groupsbox'>
      <div className='groupscol1'>
      <div className='groupdivtwo'>
      <h2 style={{marginLeft:"2.5vw",margin:"0.5vw",display:"inline"}}>All Groups</h2>
      <input style={{width:"63vw",marginLeft:"2.5vw",margin:"0.5vw",display:"inline"}} placeholder="enter search term" onChange={(e)=>this.handleSearchChange(e)}></input>
      <button style={{marginLeft:"2.5vw",margin:"0.5vw",display:"inline"}} onClick={(e)=>this.searchGroups(e)}>Search All Groups</button>
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
