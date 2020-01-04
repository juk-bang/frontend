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
import Detail from "Route/Room/Detail/Detail";
import CommunityModify from "Route/Community/CommunityModify";
import MyPage from "Route/User/MyPage";
import Favorites from "Route/User/Favorites";
import Edit from "Route/User/Edit";
import Chatting from "Route/User/Chatting/Chatting";
import ChattingDetail from "Route/User/Chatting/ChattingDetail";
import Secession from "Route/User/Secession";
import Posts from "Route/User/Posts";
import SellerHome from "Route/Seller/SellerHome";
import Chatting from "Route/User/Chatting/Chatting";
import ChattingDetail from "Route/User/Chatting/ChattingDetail";

export default () => {
  return (
    <Router>
      <Switch>
        {/* 메인페이지 */}
        <Route path="/" exact component={Home} />
        {/* 방 */}
        <Route path="/roomlist/:univid" exact component={RoomList} />
        <Route path="/roomlist/:univid/:roomid" exact component={Detail} />
        {/* 커뮤니티 */}
        <Route path="/community/:univid" exact component={CommunityList} />
        <Route
          path="/community/detail/:univid/:postid"
          exact
          component={CommunityDetail}
        />
        <Route path="/community/:univid/new" exact component={CommunityNew} />
        <Route
          path="/community/modify/:univid/:postid"
          exact
          component={CommunityModify}
        />
        {/* 유저 */}
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={LogOut} />
        <Route path="/userinfo/:userid" exact component={MyPage} />
        <Route path="/userinfo/favorites/:userid" exact component={Favorites} />
        <Route path="/userinfo/edit/:userid" exact component={Edit} />
        <Route path="/userinfo/chatting/:userid" exact component={Chatting} />
        <Route path="/userinfo/chatting/:userid/:partnerid" exact component={ChattingDetail} />
        <Route path="/userinfo/secession/:userid" exact component={Secession} />
        <Route path="/userinfo/posts/:userid" exact component={Posts} />
        {/* 방 판매자 */}
        <Route path="/manager" exact component={SellerHome} />
      </Switch>
    </Router>
  );
};
