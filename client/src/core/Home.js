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
import ip from 'ip-in';

let info=[""]

info.sort(() => Math.random() - 0.5);
info.sort(() => Math.random() - 0.5);
info.sort(() => Math.random() - 0.5);


export default function Home({history}){
  const [users, setUsers] = useState(false)
  const [vidOne, setVidOne] = useState("")
  const [vidTwo, setVidTwo] = useState("")
  const [graphOne, setGraphOne] = useState("")
  const [graphTwo, setGraphTwo] = useState("")
  const [graphThree, setGraphThree] = useState("")
  const [graphFour, setGraphFour] = useState("")
  const [viewForm, setViewForm] = useState(false);
  const [ready, setReady] = useState(false)
  const [user, setUser] = useState("")

  useEffect(()=> {
getGroupData()
pageCounter()
setGraphs()
  }, [])


function setVideos(visitorinfo,pagecounter){
  console.log(visitorinfo,pagecounter,"visitorinfo,pagecounter in setVideos")
  let videos=["https://www.youtube.com/embed/tTBWfkE7BXU","https://www.youtube.com/embed/34LGPIXvU5M",
  "https://www.youtube.com/embed/8ZoI0C1mPek","https://www.youtube.com/embed/emnYMfjYh1Q","https://www.youtube.com/embed/Hgwtd4X_qFM",
  "https://www.youtube.com/embed/7IIEB5JiyNs","https://www.youtube.com/embed/xgKPyIj8Q60","https://www.youtube.com/embed/-zIqCH00V4I",
  "https://www.youtube.com/embed/uNkADHZStDE","https://www.youtube.com/embed/6s17IAj-XpU","https://www.youtube.com/embed/2qNGKFS9oGM",
  "https://www.youtube.com/embed/KXvlVIXETd0","https://www.youtube.com/embed/uXBU9qcsa-I","https://www.youtube.com/embed/t4jAhVKNufs"]

  let videostwo=["https://www.youtube.com/embed/x-oRmcYR5cM","https://www.youtube.com/embed/lu8lQKVcbOs","https://www.youtube.com/embed/_swnWW2NGBI",
  "https://www.youtube.com/embed/BZefVlnMz5g","https://www.youtube.com/embed/Hlb-HwxUxSU","https://www.youtube.com/embed/sjI8jwn0Upo",
  "https://www.youtube.com/embed/PiAHtm9yEu4","https://www.youtube.com/embed/WoObxp_eAiU","https://www.youtube.com/embed/_TcBj43mULY",
  "https://www.youtube.com/embed/FfLEHG85fEk","https://www.youtube.com/embed/IuyA7PBSGJo","https://www.youtube.com/embed/5jWbhDERLk4",
  "https://www.youtube.com/embed/xxFPZaurHZA","https://www.youtube.com/embed/z1mknIkBGUA","https://www.youtube.com/embed/61hYxh9x61Y",
  "https://www.youtube.com/embed/_pNBp0n08ak","https://www.youtube.com/embed/CfPq6uUO7Og","https://www.youtube.com/embed/ExHCAjRsZhA",
  "https://www.youtube.com/embed/Xcuz6BUUl20","https://www.youtube.com/embed/lRMUk1dVhsg","https://www.youtube.com/embed/6ivHHAqzMG8",
  "https://www.youtube.com/embed/e1OlTPhI0dU","https://www.youtube.com/embed/IeQv32Z5R7o","https://www.youtube.com/embed/zqwNzo5LR-0",
  "https://www.youtube.com/embed/qVHzAinRH4g","https://www.youtube.com/embed/FUWrgLpazwE","https://www.youtube.com/embed/Ei13RX2W8FQ",
  "https://www.youtube.com/embed/2ZHafA6dVBs"]

  let anarchismvideos=["https://www.youtube.com/embed/yyqG-71zOi0","https://www.youtube.com/embed/UOGd30eFuqI","https://www.youtube.com/embed/2fipJAwje68",
"https://www.youtube.com/embed/r8i4RAxLB-o","https://www.youtube.com/embed/Peyoc7-W0lc","https://www.youtube.com/embed/d-TT4qAKM4w",
"https://www.youtube.com/embed/Cc5i5Xau4xs","https://www.youtube.com/embed/ihqLJ4Cayrw","https://www.youtube.com/embed/ojXxz1u1R4c",
"https://www.youtube.com/embed/cDnenjIdnnE","https://www.youtube.com/embed/Ww46lxIc6-w","https://www.youtube.com/embed/SH2pFTx_8VE",
"https://www.youtube.com/embed/I0XhRnJz8fU","https://www.youtube.com/embed/6-tOSrfHMBc","https://www.youtube.com/embed/zXlHGseyvfw",
"https://www.youtube.com/embed/lDNuzFQW3uI","https://www.youtube.com/embed/pTzC_QqSqwc"]

  if(pagecounter.psychologicalwar.includes(visitorinfo)&&pagecounter.info.includes(visitorinfo)){
    videos.push(...videostwo)
  }else{
    videos.push(...anarchismvideos)
  }
      let randomVids = videos.sort(() => .5 - Math.random()).sort(() => .5 - Math.random()).slice(0, 2);
      setVidOne(randomVids[0])
      setVidTwo(randomVids[1])
}

function setGraphs(){
  let graphs=[
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0ZdR7vCA7n-GYslizPF64XXwI1Xe7Y1H3IulxGGxD3FlRp1iRjt0-BLdexkq9Hh919gdQA1E-Hqro/pubchart?oid=1117902476&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0ZdR7vCA7n-GYslizPF64XXwI1Xe7Y1H3IulxGGxD3FlRp1iRjt0-BLdexkq9Hh919gdQA1E-Hqro/pubchart?oid=1799388586&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0ZdR7vCA7n-GYslizPF64XXwI1Xe7Y1H3IulxGGxD3FlRp1iRjt0-BLdexkq9Hh919gdQA1E-Hqro/pubchart?oid=1751706138&amp;format=interactive",
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ0ZdR7vCA7n-GYslizPF64XXwI1Xe7Y1H3IulxGGxD3FlRp1iRjt0-BLdexkq9Hh919gdQA1E-Hqro/pubchart?oid=2024893279&amp;format=interactive"
]
let randomGraphs = graphs.sort(() => .5 - Math.random()).slice(0, 4);
setGraphOne(randomGraphs[0])
setGraphTwo(randomGraphs[1])
setGraphThree(randomGraphs[2])
setGraphFour(randomGraphs[3])
}

async function getVisitorInfo(){
  let ipAddress = await ip.getIpAddress()
 console.log('ipAddress',ipAddress)
 let use = await ip.getCountryDetails()
 delete use.lat
 delete use.lon
 if(use.status=="fail"){
   use=ipAddress
 }
 console.log('countryDetails',use)
 setUser(use)
 return use
}

  async function pageCounter(){
    let use=await getVisitorInfo()
console.log(use,"use")
  let options = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  if (typeof use=="string"){
    let item={user:use}
    options.body=JSON.stringify(item)
  }else{
    let item={user:Object.values(use).join(",")}
    options.body=JSON.stringify(item)
  }
  console.log(options,"options")
  let pagecounter=await fetch("/groups/addtopagecounter/home", options
  ).then(res => {
  return res.json()
  }).catch(err => {
  console.error(err);
  })
  pagecounter=pagecounter.data
  console.log(pagecounter,"pagecounter")
  let visitorinfo=Object.values(user).join(",")
  console.log(visitorinfo,"visitorinfo")
  if(pagecounter.psychologicalwar.includes(visitorinfo)&&pagecounter.info.includes(visitorinfo)){
    setReady(true)
    }
  }

  async function getGroupData(){
    await fetch(`/groups/getusers`)
        .then(response => response.json())
        .then(data=>{
          console.log("users",data)
          setUsers(data)
        })
  }
    return (
      <div style={{height:"100vh",width:"100vw",overflow:"hidden",scroll:"none"}}>
      {!auth.isAuthenticated()&&<div style={{height:"100vh",width:"100vw",position:"relative",zIndex:2,overflow:"hidden"}}>
      {viewForm&&<>
        <div style={{position:"fixed",marginLeft:"5vw",width:"45vw",height:"75vh",overflowY:"scroll",overflowX:"hidden"}}>
        <div style={{height:"50vh"}}>
        <iframe width="100%" height="100%" seamless frameborder="0" scrolling="no" src={graphOne}></iframe>
        <iframe width="100%" height="100%" seamless frameborder="0" scrolling="no" src={graphTwo}></iframe>
        <iframe width="100%" height="100%" seamless frameborder="0" scrolling="no" src={graphThree}></iframe>
        <iframe width="100%" height="100%" seamless frameborder="0" scrolling="no" src={graphFour}></iframe>
        </div>
        </div>
        <div style={{position:"fixed",marginLeft:"50vw",height:"80vh",overflowY:"scroll"}}>
      <div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSef1tXcMw3a6qshzzhzXY3WBcGSma2ALxeaEj0ycQu2fsD8eg/viewform?embedded=true" width="640" height="2225" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      </div></>}
      {!viewForm&&<>
      <h5 style={{marginLeft:"5vw",marginRight:"10vw",marginTop:"5vh"}}>
A democratic social network, admins are elected by and accountable to the groups. All groups are federated together with a higher level elected representative groups. Representatives can be chosen or recalled at any time, there are no particular election events. Group members can create, vote on and enforce their own rules.
      </h5>
      <div className="vids" style={{position:"fixed",marginLeft:"5vw",bottom:"4%"}}>
    <iframe style={{width:"40vw",height:"40vh",display:"inline"}} src={vidOne} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe style={{marginLeft:"5vw",width:"40vw",height:"40vh",display:"inline"}} src={vidTwo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </>}
      <img className="homepageimg" src={require('./hands.png')} /></div>}
      {auth.isAuthenticated()&&<><GroupList />
        </>}
      </div>
    )
}
// <button className="formbutton" style={{padding:"0.5vw",marginLeft:"5vw",marginRight:"10vw",marginTop:"5vh"}} onClick={(e) => setViewForm(!viewForm)}>Fill out our survey and see survey results?</button>
