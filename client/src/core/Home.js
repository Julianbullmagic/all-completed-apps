import React, {useState, useEffect} from 'react'
import ChatPage from "./../ChatPage/ChatPage"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import {Image} from 'cloudinary-react'
import {Link} from "react-router-dom";
import GroupList from '../groups/GroupList'
const KmeansLib = require('kmeans-same-size');



export default function Home({history}){
  const [users, setUsers] = useState(false)


  useEffect(()=> {
getGroupData()
  }, [])

  async function getGroupData(){
    await fetch(`/groups/getusers`)
        .then(response => response.json())
        .then(data=>{
          console.log("users",data)
          setUsers(data)
        })
  }
    return (
      <>
      {!auth.isAuthenticated()&&<div style={{height:"100vh",overflow:"hidden",position:"relative",zIndex:2}}>
      <h5 style={{margin:"5vw"}}>Social Networks have been demonstrated by psychologists to be harmful to our mental health, Facebook has even admitted this in court. There are a number of reasons for this but one of the main ones is that social networks are mostly undemocratic. The admins of groups are usually not elected by the members, they are unaccountable to the group. They can sensor anyone or anything with practically few consequences for themselves. They can remove people from groups with no explanation. Group members are not at all involved in creating the rules and often these are not even made explicit. This leads to strong feelings of insecurity and social anxiety among Facebook Users. In a heirarchical/undemocratic organization, people are less likely to give each other the benefit of the doubt. We are all human, we are all imperfect. If there are strong imbalances of power, people will try to emphasize and focus on each others character flaws to provide an excuse for having a higher status in the group. It makes us less willing to admit mistakes and accept criticism. Power is always illegitimate, if we define "power" as meaning the ability to impose our own will onto other people. The Democratic Social Network aims to resolve this problem and create a more human online social environment where we can be more honest with and accepting of each other.
      </h5>
      <img className="homeimg" style={{width:"100vw",position:"absolute",zIndex:-1}} src={require('./hands.png')} /></div>}
      {auth.isAuthenticated()&&<><GroupList />
        </>}
      </>
    )
}
