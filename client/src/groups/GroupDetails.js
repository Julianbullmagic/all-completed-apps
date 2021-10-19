import React, { Component } from 'react';
import auth from './../auth/auth-helper'
import { MapContainer, TileLayer,Circle, Marker, Popup} from 'react-leaflet'
import {Link,BrowserRouter} from "react-router-dom";



class GroupDetails extends Component {


  constructor(props) {
         super(props);

         this.state = {
           group:props.group
                  }
           }

           componentDidMount(props){

                               if(this.props.group.level==0){
                                 var membercoords=this.props.group.members.map(item=>{return item.coordinates})
                                 var groupy=[]
                                 console.log(this[`props`][`group`][`members`])
                                 var membcoords=this[`props`][`group`][`members`].map(item=>{return item.coordinates})
                                 console.log(membcoords)
                                 var obj={_id:this[`props`][`group`]['_id'],location:this[`props`][`group`]['location'],
                                 centroid:this[`props`][`group`]['centroid'],colour:"blue",membcoords:membcoords}
                                 groupy.push(obj)
                                 console.log("groupyyyyyyyyyy",groupy)
                                 this.setState({
                                   group:this.props.group,groupy:groupy
                                 })
                               }

                               if (this.props.group.level>0){
                                 var membercoords=this.props.group.members.map(item=>{return item.coordinates})
                                 var groupy=[]
                                 var colours=["purple","yellow","green","blue","red","pink","black","orange"]

                                 for (var grou=0;grou<this.props.group.groupsbelow.length;grou++){
                                   var membcoords=this[`props`][`group`][`groupsbelow`][grou][`members`].map(item=>{return item.coordinates})
                                 console.log(membcoords)
                                 var obj={_id:this[`props`][`group`]['groupsbelow'][grou]['_id'],location:this[`props`][`group`]['groupsbelow'][grou]['location'],centroid:this[`props`][`group`]['groupsbelow'][grou]['centroid'],colour:colours[grou],membcoords:membcoords}
                                 groupy.push(obj)
                                 }
                                 console.log("groupyyyyyyyyyy",groupy)
                                 this.setState({
                                   group:this.props.group,groupy:groupy
                                 })
                               }
           }


             componentWillReceiveProps(nextProps) {
                if (nextProps.group !== this.props.group) {

                  if(nextProps.group.level==0){
                    var membercoords=nextProps.group.members.map(item=>{return item.coordinates})
                    var groupy=[]
                    console.log(nextProps[`group`][`members`])
                    var membcoords=nextProps[`group`][`members`].map(item=>{return item.coordinates})
                    console.log(membcoords)
                    var obj={_id:nextProps[`group`]['_id'],location:nextProps[`group`]['location'],
                    centroid:nextProps[`group`]['centroid'],colour:"blue",membcoords:membcoords}
                    groupy.push(obj)
                    console.log("groupyyyyyyyyyy",groupy)
                    this.setState({
                      group:nextProps.group,groupy:groupy
                    })
                  }

                  if (nextProps.group.level>0){
                    var membercoords=nextProps.group.members.map(item=>{return item.coordinates})
                    var groupy=[]
                    var colours=["purple","yellow","green","blue","red","pink","black","orange"]

                    for (var grou=0;grou<nextProps.group.groupsbelow.length;grou++){
                      var membcoords=nextProps[`group`][`groupsbelow`][grou][`allmembers`].map(item=>{return item.coordinates})
                    console.log(membcoords)
                    var obj={_id:nextProps[`group`]['groupsbelow'][grou]['_id'],location:nextProps[`group`]['groupsbelow'][grou]['location'],centroid:nextProps[`group`]['groupsbelow'][grou]['centroid'],colour:colours[grou],membcoords:membcoords}
                    groupy.push(obj)
                    }
                    console.log("groupyyyyyyyyyy",groupy)
                    this.setState({
                      group:nextProps.group,groupy:groupy
                    })
                  }
                }
              }




  render(){
console.log("GROUPY",this.state.groupy)

var mappedusers=[]
var mappedallusers=[]
var mappedgroupmarkers=[]
    if(this.state.groupy){
    for (var gr of this.state.groupy){
      var slicedmembcoords=gr.membcoords
      var circles=slicedmembcoords.map(coord=>(

        <Circle center={[coord[0],coord[1]]} radius={100} pathOptions={{ color: gr.colour }} />
      ))
      mappedusers.push(...circles)
    }

    for (var mark of this.state.groupy){
      var marker=<>
      <Marker position={[mark.centroid[0],mark.centroid[1]]} pathOptions={{ color: mark.colour }}>
    <Popup>  <BrowserRouter forceRefresh={true}><Link className="gotogroup" exact to={"/groups/" + mark._id}>
    <h2>{mark.location}</h2></Link></BrowserRouter></Popup>
    </Marker>
    </>
    mappedgroupmarkers.push(marker)
    }
    }


    return (
      <React.Fragment>
          <div>
          <h2>Group Details</h2>
          {this.state.group.title&&<p>Group Title: <strong> {this.state.group.title}</strong></p>}
          {this.state.group.location&&<p>Location: <strong> {this.state.group.location}</strong></p>}
          <p>Level: <strong> {this.state.group.level}</strong></p>
          {this.state.group.description&&<p>Description: <strong> {this.state.group.description}</strong></p>}
          {(this.state.group.centroid&&this.state.group.groupsbelow)&&<p>All the small circles on the map roughly show the spread of members of this whole group. The different colours
          represent each of the groups that are children of this group. The small spots do not actually show the locations
          of members but approximately show the area covered by each group.</p>}

          {(this.state.group.centroid&&this.state.group.type=="localgroup")&&<MapContainer style={{ height: "60vw", width: "80vw" }}
     center={[this.state.group.centroid[0],this.state.group.centroid[1]]} zoom={60/this.state.group.radius} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


              {mappedusers.length>1&&mappedusers.map(item=>( item))}
              {mappedgroupmarkers.length>1&&mappedgroupmarkers.map(item=>( item))}


          </MapContainer>}
          {this.state.group.groupabove&&
          <><h2>Group Above</h2><BrowserRouter forceRefresh={true}><Link className="gotogroup" exact to={"/groups/" + this.state.group.groupabove._id}><h2>{this.state.group.title&&this.state.group.title}{this.state.group.groupabove.location}</h2></Link></BrowserRouter></>}
          {this.state.group.groupsbelow&&<h2>Groups below</h2>}
          {(this.state.group.groupsbelow&&(this.state.level>1))&&this.state.group.groupsbelow.map(item=>
          {return <BrowserRouter forceRefresh={true}><Link className="gotogroup" exact to={"/groups/" + item._id}> <h5>{item.title&&item.title}{item.location}</h5></Link></BrowserRouter>})}
          {(this.state.group.groupsbelow&&(this.state.level==1))&&this.state.group.groupsbelow.map(item=>
          {return <BrowserRouter forceRefresh={true}><Link className="gotogroup" exact to={"/groups/" + item._id}> <h5>{item.title&&item.title}{item.location}</h5></Link></BrowserRouter>})}
          </div>
      </React.Fragment>
    );
  }
}

export default GroupDetails;
