import React, { useState, useEffect, useRef} from 'react'
import {Redirect, Link} from 'react-router-dom'
import ChatPage from "./../ChatPage/ChatPage"
import {Image} from 'cloudinary-react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import auth from './../auth/auth-helper'
import io from "socket.io-client";
import Axios from 'axios'
const mongoose = require("mongoose");




export default function SingleUser({ match }) {
  const [user, setUser] = useState({})
  const [numImages, setNumImages] = useState([0]);
  const jwt = auth.isAuthenticated()
  const [events,setEvents]=useState(false)
  const [eventsApproved,setEventsApproved]=useState(false)
  const [posts,setPosts]=useState(false)
  const [polls,setPolls]=useState(false)
  const [leaders,setLeaders]=useState(false)
  const [rules,setRules]=useState(false)
  const [purchases,setPurchases]=useState(false)
  const [restrictions,setRestrictions]=useState(false)
  const [rulesApproved,setRulesApproved]=useState(false)
  const [restrictionsApproved,setRestrictionsApproved]=useState(false)

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    expertise:'',
    performancedescription:'',
    rates:'',
    images:'',
    error:'',
    open: false,
  })
  const selectedFile1 = React.useRef(null)
  const selectedFile2 = React.useRef(null)
  const selectedFile3 = React.useRef(null)
  const selectedFile4 = React.useRef(null)
  const selectedFile5 = React.useRef(null)
  let server = "http://localhost:5000";
  let socket = io(server);

  useEffect(() => {
    getUser()
  }, [])

  function extraImage(e){
    e.preventDefault()
    let imagenum=numImages

    if(imagenum.length<5){
      imagenum.push(0)
    }

    setNumImages([...imagenum])
  }

  function lessImage(e){
    e.preventDefault()

    let imagenum=numImages
    if(imagenum.length>0){
      imagenum.pop()
    }

    setNumImages([...imagenum])
  }


  async function getUser(){
    await fetch(`/groups/getuser/`+match.params.userId)
    .then(response => response.json())
    .then(data=>{

      setUser(data.data)
      setEvents(data.data.events)
      setEventsApproved(data.data.eventsapproved)
      setLeaders(data.data.leaders)
      setPosts(data.data.posts)
      setPolls(data.data.polls)
      setRules(data.data.rules)
      setPurchases(data.data.purchases)
      setRestrictions(data.data.restrictions)
      setRulesApproved(data.data.rulesapproved)
      setRestrictionsApproved(data.data.restrictionsapproved)
    })
    .catch(err => {
      console.error(err);
    })
  }

  function deleteRestriction(e,item) {

    for (let rest of restrictions){

    }
    let newrestrictions=restrictions.filter(restriction=>!(restriction._id==item._id))
    setRestrictions(newrestrictions)

    const options={
      method: "Delete",
      body: '',
      headers: {
        "Content-type": "application/json; charset=UTF-8"}}


        fetch("/groups/deleterestriction/"+item._id, options)
        .then(response => response.json())
        .then(json =>console.log(json))
          .catch(err => {
            console.error(err);
          })

        }
        async function updateUser(){

          let imageids=[]

          if(selectedFile1.current.files[0]){
            const formData = new FormData();
            formData.append('file', selectedFile1.current.files[0]);
            formData.append("upload_preset", "jvm6p9qv");
            await Axios.post("https://api.cloudinary.com/v1_1/julianbullmagic/image/upload",formData)
            .then(response => {

              imageids.push(response.data.public_id)
            })}

            if(selectedFile2.current.files[0]){const formData = new FormData();
              formData.append('file', selectedFile2.current.files[0]);
              formData.append("upload_preset", "jvm6p9qv");
              await Axios.post("https://api.cloudinary.com/v1_1/julianbullmagic/image/upload",formData)
              .then(response => {

                imageids.push(response.data.public_id)
              })}

              if(selectedFile3.current.files[0]){const formData = new FormData();
                formData.append('file', selectedFile3.current.files[0]);
                formData.append("upload_preset", "jvm6p9qv");
                await Axios.post("https://api.cloudinary.com/v1_1/julianbullmagic/image/upload",formData)
                .then(response => {

                  imageids.push(response.data.public_id)
                })}

                if(selectedFile4.current.files[0]){const formData = new FormData();
                  formData.append('file', selectedFile4.current.files[0]);
                  formData.append("upload_preset", "jvm6p9qv");
                  await Axios.post("https://api.cloudinary.com/v1_1/julianbullmagic/image/upload",formData)
                  .then(response => {

                    imageids.push(response.data.public_id)
                  })}

                  if(selectedFile5.current.files[0]){const formData = new FormData();
                    formData.append('file', selectedFile5.current.files[0]);
                    formData.append("upload_preset", "jvm6p9qv");
                    await Axios.post("https://api.cloudinary.com/v1_1/julianbullmagic/image/upload",formData)
                    .then(response => {

                      imageids.push(response.data.public_id)
                    })}


                    let youtubevids=values.promovideos.split(",")
                    youtubevids=youtubevids.map(item=>{
                      let x=item.split("=")

                      return (
                        x[1]
                      )})

                      youtubevids=youtubevids.map(item=>{
                        return(
                          "https://www.youtube.com/embed/"+item
                        )
                      })


                      const newuser = {
                        _id:match.params.userId,
                        name: values.name || undefined,
                        email: values.email || undefined,
                        website: values.website||undefined,
                        youtube: values.youtube||undefined,
                        promovideos: youtubevids||undefined,
                        performancedescription:values.performancedescription||undefined,
                        expertise: values.expertise || undefined,
                        rates:values.rates || undefined,
                        images:imageids,
                        password: values.password || undefined,
                        events:events,
                        eventsapproved:eventsApproved,
                        leaders:leaders,
                        posts:posts,
                        polls:polls,
                        rules:rules,
                        restriction:restrictions,
                        rulesapproved:rulesApproved,
                        restrictionsapproved:restrictionsApproved
                      }


                      setUser(newuser)

                      const options={
                        method: "PUT",
                        body: JSON.stringify(newuser),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8"}}


                          await fetch("/groups/updateuser/"+match.params.userId, options)
                          .then(response => response.json()).then(json =>console.log(json))
                          .catch(err=>console.error(err))
                          }


                          const handleChange = name => event => {

                            setValues({ ...values, [name]: event.target.value })
                          }

                          const clickSubmit = (e) => {
                            updateUser()
                          }
                          let d = new Date();
                          let n = d.getTime();

                          let restrictionsmapped=<></>
                          if(restrictions){
                            restrictionsmapped=restrictions.map(item=>{
                              let elapsed=n-item.timecreated
                              let dayselapsed=Math.round(elapsed/86400000)
                              let daysleft=item.duration-dayselapsed
                              return (<div className="leader" style={{textAlign:"center",margin:"0.5vw"}}><p style={{display:"inline"}}><strong>Restriction: </strong>{item.restriction} for {daysleft} days; <strong>Explanation: </strong> {item.explanation}; </p>
                              {(item.createdby==auth.isAuthenticated().user._id)&&<div style={{display:"inline"}}><p style={{display:'inline'}}>You created this restriction with your leader privileges </p>
                              <button style={{display:'inline'}} onClick={(e) => deleteRestriction(e,item)}>Delete Restriction?</button></div>}</div>)})}



                              return (
                                <>
                                {user&&(
                                  <div className="signupform"  style={{textAlign:"center"}}>
                                  <div className="innersignupform"  style={{textAlign:"center"}}>
                                  <h1 style={{textAlign:"center"}}>{user.name}</h1>
                                  {user.website&&<a href={user.website}><h3 style={{textAlign:"center",color:"blue"}}>Website</h3></a>}
                                  {user.expertise&&<h3 style={{textAlign:"center"}}>{user.expertise}</h3>}
                                  {user.phone&&<h3 style={{textAlign:"center"}}>Phone Number: {user.phone}</h3>}
                                  {user.email&&<h3 style={{textAlign:"center"}}>Email Address: {user.email}</h3>}
                                  {(user.images&&user.images.length>0)&&<><br/>
                                    <h3 style={{textAlign:"center"}}>Images</h3>
                                    <div style={{marginBottom:"40vw"}}>
                                    <AwesomeSlider style={{marginLeft:"5vw",width:"50vw", zIndex: 1, position:"absolute"}}>
                                    {user.images&&user.images.map(item=>{return (<div><Image style={{width:"100%"}} cloudName="julianbullmagic" publicId={item} /></div>)})}
                                    </AwesomeSlider>
                                    </div></>}
                                    {user.restrictions&&<><h3 style={{textAlign:"center"}}>Restrictions</h3>
                                    {restrictionsmapped}</>}
                                    </div>
                                    </div>
                                  )}


                                  {(auth.isAuthenticated()&auth.isAuthenticated().user._id==match.params.userId)&&(
                                    <div className="signupform">
                                    <div  style={{position: "static"}}  className="innersignupform">
                                    <h1 style={{textAlign:"center"}}>
                                    Edit Listing
                                    </h1>
                                    <div className="signininput">
                                    <h5 style={{marginRight:"1vw"}} className="ruletext">Name </h5><input id="name" placeHolder={user.name} label="Name"value={values.name} onChange={handleChange('name')} margin="normal"/>
                                    </div>

                                    <div className="signininput">
                                    <h5 style={{marginRight:"1vw",textAlign:"left"}} className="ruletext">Email </h5><input id="email" placeHolder={user.email} type="email" label="Email"  value={values.email} onChange={handleChange('email')} margin="normal"/>
                                    </div>

                                    <div className="signininput">
                                    <h5 style={{marginRight:"1vw",textAlign:"left"}} className="ruletext">Website </h5><input id="website" placeHolder={user.website} type="website" label="website" value={values.website} onChange={handleChange('website')} margin="normal"/>
                                    </div>

                                    <div className="signininput">
                                    <h5 className="ruletext" style={{marginRight:"1vw",textAlign:"left"}}>Expertise </h5><input id="expertise" placeHolder={user.expertise} type="expertise" label="expertise" value={values.expertise} onChange={handleChange('expertise')} margin="normal"/>
                                    </div>

                                    <div className="signininput">
                                    <h5 style={{marginRight:"1vw",textAlign:"left"}} className="ruletext">Password </h5><input id="password" placeHolder={user.password} type="password" label="Password" value={values.password} onChange={handleChange('password')} margin="normal"/>
                                    </div>


                                    <h4>Tick the boxes below to recieve email notifications about new suggestions. At least 10% of members must have voted for something before notifications will be sent in order to help prevent individuals from spamming everyone. </h4>

                                    <input
                                    type="checkbox"
                                    style={{width:"1vw"}}
                                    checked={events}
                                    onChange={e => {

                                      setEvents(e.target.checked)}}
                                      />
                                      <h5 style={{marginRight:"1vw"}}  className="ruletext">Event Suggestions</h5>
                                      <input
                                      type="checkbox"
                                      style={{width:"1vw"}}
                                      checked={eventsApproved}
                                      onChange={e => {

                                        setEventsApproved(e.target.checked)}}
                                        />
                                        <h5 style={{marginRight:"1vw"}}  className="ruletext">Events Approved </h5>

                                        <input
                                        type="checkbox"
                                        style={{width:"1vw"}}
                                        checked={posts}
                                        onChange={e => {

                                          setPosts(e.target.checked)}}
                                          />
                                          <h5 style={{marginRight:"1vw"}} className="ruletext">Posts </h5>

                                          <input
                                          type="checkbox"
                                          style={{width:"1vw"}}
                                          checked={polls}
                                          onChange={e => {

                                            setPolls(e.target.checked)}}
                                            />
                                            <h5 style={{marginRight:"1vw"}} className="ruletext">Polls </h5>

                                            <input
                                            type="checkbox"
                                            style={{width:"1vw"}}
                                            checked={rules}
                                            onChange={e => {

                                              setRules(e.target.checked)}}
                                              />
                                              <h5 style={{marginRight:"1vw"}} className="ruletext">Rule Suggestions </h5>

                                              <input
                                              type="checkbox"
                                              style={{width:"1vw"}}
                                              checked={purchases}
                                              onChange={e => {

                                                setPurchases(e.target.checked)}}
                                                />
                                                <h5 style={{marginRight:"1vw"}} className="ruletext">Purchases </h5>

                                                <input
                                                type="checkbox"
                                                style={{width:"1vw"}}
                                                checked={restrictions}
                                                onChange={e => {

                                                  setRestrictions(e.target.checked)}}
                                                  />
                                                  <h5 style={{marginRight:"1vw"}} className="ruletext">Restrictions </h5>


                                                  <h4>Tick the boxes below to recieve email notifications when new rules or restrictions for particular uses recieve approval from above 75% of the members</h4>
                                                  <input
                                                  type="checkbox"
                                                  style={{width:"1vw"}}
                                                  checked={rulesApproved}
                                                  onChange={e => {

                                                    setRulesApproved(e.target.checked)}}
                                                    />
                                                    <h5 style={{marginRight:"1vw"}} className="ruletext">Rule Approval </h5>


                                                    <input
                                                    type="checkbox"
                                                    style={{width:"1vw"}}
                                                    checked={restrictionsApproved}
                                                    onChange={e => {

                                                      setRestrictionsApproved(e.target.checked)}}
                                                      />
                                                      <h5 style={{marginRight:"1vw"}} className="ruletext">Restriction Approval </h5>



                                                      <div className="signininput" style={{display:((numImages.length>=1)?"block":"none")}}>
                                                      <input style={{width:"100%"}} id="file" type="file" ref={selectedFile1}/>
                                                      </div>

                                                      <div className="signininput" style={{display:((numImages.length>=2)?"block":"none")}}>
                                                      <input style={{width:"100%"}} id="file" type="file" ref={selectedFile2}/>
                                                      </div>

                                                      <div className="signininput" style={{display:((numImages.length>=3)?"block":"none")}}>
                                                      <input style={{width:"100%"}} id="file2" type="file" ref={selectedFile3}/>
                                                      </div>

                                                      <div className="signininput" style={{display:((numImages.length>=4)?"block":"none")}}>
                                                      <input style={{width:"100%"}} id="file3" type="file" ref={selectedFile4}/>
                                                      </div>

                                                      <div className="signininput" style={{display:((numImages.length>=5)?"block":"none")}}>
                                                      <input style={{width:"100%"}} id="file4" type="file" ref={selectedFile5}/>
                                                      <p>Max 5 images</p>
                                                      </div>

                                                      <button onClick={(e) => extraImage(e)}>Add Extra Image</button>
                                                      <button onClick={(e) => lessImage(e)}>One Less Image</button>
                                                      <button id="submit" onClick={clickSubmit}>Submit</button>
                                                      </div>
                                                      </div>
                                                    )}

                                                    </>
                                                  )
                                                }
