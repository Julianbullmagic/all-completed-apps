import React, {useRef,useState,useEffect} from 'react'
import auth from '../auth/auth-helper'
import Axios from 'axios'
const axios = require('axios');
const mongoose = require("mongoose");



export default function CreateGroupForm(props) {
  const titleValue = React.useRef('')
  const descriptionValue = React.useRef('')
  const higherGroup = React.useRef('616ca8782312510000c6e60a')
  const level = React.useRef(0)
  const selectedFile1 = React.useRef(null)
  const [levels, setLevels] = useState([]);
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    // fetch(`/groups/getuser/`+auth.isAuthenticated().user._id)
    // .then(response => response.json())
    // .then(data=>{
    //   let user=JSON.parse(JSON.stringify(data.data))
    //   console.log("user",user)
    //   const levels = new Set();
    //
    //   for (let group of user.highergroupstheybelongto){
    //     levels.add(group.level)
    //   }
    //   setLevels(levels)
    //   })
    // .catch(error=>console.log(error))
  },[])

  async function handleSubmit(e) {
    e.preventDefault()

    var groupId=mongoose.Types.ObjectId()
    groupId=groupId.toString()

    let imageids=[]
    console.log(selectedFile1.current.files[0])
    if(selectedFile1.current.files[0]){
      const formData = new FormData();
      formData.append('file', selectedFile1.current.files[0]);
      formData.append("upload_preset", "jvm6p9qv");
      await Axios.post("https://api.cloudinary.com/v1_1/julianbullmagic/image/upload",formData)
      .then(response => {
        console.log("cloudinary response",response)
        imageids.push(response.data.public_id)
      })
      .catch(err => {
        console.log(err);
      })
    }

      console.log("imageids",imageids)

      let d = new Date();
      let n = d.getTime();

      const newPost={
        _id:groupId,
        title: titleValue.current.value,
        groupabove:"616ca8782312510000c6e60a",
        description:descriptionValue.current.value,
        timecreated:n,
        images:imageids,
        level:level.current.value,
        members:[],
        centroid:auth.isAuthenticated().user.coordinates,
      }

      props.updateGroups(newPost)

      console.log(auth.isAuthenticated().user.name)
      console.log(newPost)
      const options={
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8"}}
          const optionstwo={
            method: "PUT",
            body: "",
            headers: {
              "Content-type": "application/json; charset=UTF-8"}}

              let groupid=await fetch("groups/creategroup", options)
              .then(response => response.json())
              .then(data=>{return data.data})
              .catch(err => {
                console.log(err);
              })
              await fetch("groups/addlowertohigher/"+groupid+"/616ca8782312510000c6e60a", optionstwo)
              .then(response => response.json())
              .then(json => console.log(json))
              .catch(err => {
                console.log(err);
              })
            }


            return (
              <div className="homepageform">
              <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Title</label>
              <input
              type='text'
              name='titleValue'
              id='titleValue'
              ref={titleValue}
              />
              <label htmlFor='name'>Description</label>
              <input
              type='text'
              name='descriptionValue'
              id='descriptionValue'
              ref={descriptionValue}
              />
              <label htmlFor='name'>Image</label>

              <input id="file" type="file" ref={selectedFile1}/>
              <button type="submit" value="Submit">Submit</button>
              </form>
              </div>
            )}
