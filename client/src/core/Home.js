import React, {useState, useEffect} from 'react'
import ChatPage from "./../ChatPage/ChatPage"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'
import Grid from '@material-ui/core/Grid'
import auth from './../auth/auth-helper'
import background from "./2170171.jpg";
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
      {!auth.isAuthenticated()&&<div style={{height:"100vh",overflow:"hidden"}}>
      <img className="homeimg" src={require('./hands.png')} /></div>}
      {auth.isAuthenticated()&&<><GroupList />
        </>}
      </>
    )
}

// <div className="homepage">
// <div style={{margin:"1vw"}}>
// <h6 style={{margin:"0.5vw"}}>How would you improve The Democratic Social Network? This application is still a work in progress, we would like to build something that
// as many people as possible are happy with. Please email any constructive criticism to democraticsocialnetwork@gmail.com. There
// is also an online marketplace for democratic businesses called the Cooperative Marketplace</h6>
// <Link to="https://cooperative-marketplace.herokuapp.com/">
// <h1 style={{margin:"0.5vw"}}>https://cooperative-marketplace.herokuapp.com/</h1>
// </Link>
// </div>
// <br/>
// </div>
