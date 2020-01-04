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
import CommunityNew from "Route/Community/CommunityNew";
import Login from "Route/User/Login";
import LogOut from "Route/User/LogOut";
import CommunityDetail from "Route/Community/CommunityDetail";

export default () => {
  return (
    <Router>
      <Switch>
        {/* 메인페이지 */}
        <Route path="/" exact component={Home} />
        {/* 방 */}
        <Route path="/roomlist/:univid" exact component={RoomList} />
        {/* 커뮤니티 */}
        <Route path="/community/:univid" exact component={CommunityList} />
        <Route
          path="/community/detail/:univid/:postid"
          exact
          component={CommunityDetail}
        />
        <Route path="/community/:univid/new" exact component={CommunityNew} />
        {/* 유저 */}
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={LogOut} />
      </Switch>
    </Router>
  );
};
