import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import PrivateRoute from './auth/PrivateRoute'
import GroupPage from './groups/GroupPage'
import SingleUser from './groups/SingleUser'
import Menu from './core/Menu'
import ExplanationPage from "./ExplanationPage"
import Info from "./Info"
import SovietUnion from "./sovietunion"
import China from "./china"
import Cuba from "./cuba"
import Yugoslavia from "./yugoslavia"
import LibertarianSocialism from "./LibertarianSocialism"
import Tennomar from "./Tennomar"
import Paris1871 from "./Paris1871"
import Cooperatives from "./Cooperatives"
import Democracy from "./Democracy"
import Neatugua from "./Neatugua"
import ManufacturingConsentVideos from "./ManufacturingConsentVideos"
import CooperativesVideos from "./CooperativesVideos"
import LibertarianSocialismVideos from "./LibertarianSocialismVideos"
import DemocracyVideos from "./DemocracyVideos"
import PsychologicalWarfare from "./psychologicalwarfare"
import ForgotPassword from './auth/ForgotPassword'
import ip from 'ip-in';

let user

async function getVisitorInfo(){
  let ipAddress = await ip.getIpAddress()
 console.log('ipAddress',ipAddress)
 user = await ip.getCountryDetails()
 console.log('countryDetails',user)
}

  async function pageCounter(){
    await getVisitorInfo()
  const options = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  let pagecounter=await fetch("/groups/addtopagecounter/youtube", options
  ).then(res => {
  return res.json()
  }).catch(err => {
  console.error(err);
  })
  pagecounter=pagecounter.data
  console.log(pagecounter,"pagecounter")
  let visitorinfo=Object.values(user).join(",")
  console.log(visitorinfo,"visitorinfo")
  }

function GoYoutube(){
  pageCounter()
  window.location.href = 'https://www.youtube.com/watch?v=atVYW0UinOU&list=PLoBMIS_SbLUjqKE2lNFH2EcU3dfLGa4Gu'
  return null;
}


const MainRouter = () => {
    return (<div style={{height:"100vh",width:"100vw",overflow:"hidden"}}>
    <p style={{display:"none"}}>democracy-social-network, Democracy-Social-Network, democracy social network, Democracy Social Network</p>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <div style={{position:"absolute",width:"98vw",overflowY:"auto",overflowX:"hidden"}}>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/forgotpassword/:token" component={ForgotPassword}/>
        <Route exact path="/group/:groupId" component={GroupPage}/>
        <Route exact path="/explanation" component={ExplanationPage}/>
        <Route exact path="/singleuser/:userId" component={SingleUser}/>
        <Route exact path="/info" component={Info}/>
        <Route exact path="/Psychological-War" component={PsychologicalWarfare}/>
        <Route exact path="/Cuba" component={Cuba}/>
        <Route exact path="/Soviet-Union" component={SovietUnion}/>
        <Route exact path="/Yugoslavia" component={Yugoslavia}/>
        <Route exact path="/China" component={China}/>
        <Route exact path="/Tennomar" component={Tennomar}/>
        <Route exact path="/Paris1871" component={Paris1871}/>
        <Route exact path="/Cooperatives" component={Cooperatives}/>
        <Route exact path="/Democracy" component={Democracy}/>
        <Route exact path="/Neatugua" component={Neatugua}/>
        <Route exact path="/manufacturingconsentvideos" component={ManufacturingConsentVideos}/>
        <Route exact path="/cooperativesvideos" component={CooperativesVideos}/>
        <Route exact path="/democracyvideos" component={DemocracyVideos}/>
        <Route exact path="/libertariansocialismvideos" component={LibertarianSocialismVideos}/>
        <Route path='/youtube' component={ GoYoutube }/>
        </div>
      </Switch>
    </div>)
}

export default MainRouter
