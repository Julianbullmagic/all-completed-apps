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
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/forgotpassword/:token" component={ForgotPassword}/>
        <Route exact path="/group/:groupId"    component={GroupPage}/>
        <Route exact path="/explanation"    component={ExplanationPage}/>
        <Route exact path="/singleuser/:userId"    component={SingleUser}/>
        <Route exact path="/info"    component={Info}/>
        <Route exact path="/Psychological-War"    component={PsychologicalWarfare}/>
        <Route exact path="/psychological-war"    component={PsychologicalWarfare}/>
        <Route exact path="/Cuba"    component={Cuba}/>
        <Route exact path="/cuba"    component={Cuba}/>
        <Route exact path="/Soviet-Union"    component={SovietUnion}/>
        <Route exact path="/soviet-union"    component={SovietUnion}/>
        <Route exact path="/yugoslavia"    component={Yugoslavia}/>
        <Route exact path="/Yugoslavia"    component={Yugoslavia}/>
        <Route exact path="/china"    component={China}/>
        <Route exact path="/China"    component={China}/>
      </Switch>
    </div>)
}

export default MainRouter
