//Reactjs Library
import React from "react";
//ThirdParty Library
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
//Components
import Home from "Route/Home";
import RoomList from "Route/Room/RoomList";
import CommunityList from "Route/Community/CommunityList";
import Login from "Route/User/Login";
import LogOut from "Route/User/LogOut";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/roomlist/:univid" exact component={RoomList} />
        <Route path="/community/:univid" exact component={CommunityList} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={LogOut} />
      </Switch>
    </Router>
  );
};
