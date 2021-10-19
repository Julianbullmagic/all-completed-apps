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
      <div className="homepage">
{auth.isAuthenticated()&&<GroupList />}
<br/>
<div style={{margin:"1vw"}}>
<h6>How would you improve The Democratic Social Network? What do you think should be in a web application like this?
This app is an experiment, surely there are ways it can be improved. Please email any constructive criticism to Julianbullmagic@gmail.com.
We would like to create this software in a similar way to the Cuban constitution. It was drafted from a very extensive
process of public consultation and discussion with the majority of the Cuban population and then submitted for approval by referendum.
No Capitalist country has ever done this, the constitution is usually written by elites and then imposed on the population.
</h6>
</div>
<br/>
<br/>
      </div>
      </>
    )
}
