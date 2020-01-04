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

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/roomlist/:univid" exact component={RoomList} />
        <Route path="/community/:univid" exact component={CommunityList} />
      </Switch>
    </Router>
  );
};
