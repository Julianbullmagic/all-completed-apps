import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
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
import PsychologicalWarfare from "./psychologicalwarfare"

// import Lybia from "./lybia"
import ForgotPassword from './auth/ForgotPassword'

const MainRouter = () => {
    return (<div style={{height:"100vh",width:"100vw",overflow:"hidden"}}>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/signup" component={Signup}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/signin" component={Signin}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/forgotpassword/:token" component={ForgotPassword}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/group/:groupId"    component={GroupPage}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/explanation"    component={ExplanationPage}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/singleuser/:userId"    component={SingleUser}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/info"    component={Info}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/Psychological-War"    component={PsychologicalWarfare}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/psychological-war"    component={PsychologicalWarfare}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/Cuba"    component={Cuba}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/cuba"    component={Cuba}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/Soviet-Union"    component={SovietUnion}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/soviet-union"    component={SovietUnion}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/yugoslavia"    component={Yugoslavia}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/Yugoslavia"    component={Yugoslavia}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/china"    component={China}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
        <Route exact path="/China"    component={China}/>
        </div>
        <div style={{position:"absolute",height:"auto",overflowY:"scroll"}}>
      </Switch>
    </div>)
}

export default MainRouter
