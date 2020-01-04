//Reactjs Library
import React from "react";
//ThirdParty Library
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
//style
import logo from "img/titleIcon.png";
import { Color } from "./Style";
import {
  Logo,
  NavItem,
  LeftNav,
  RightNav,
  NavigationBar,
  NavBlank
} from "./HeaderStyle";

//메인 함수
export default () => {
  const Univ = localStorage.getItem("Univ");

  return (
    <>
      <NavigationBar>
        <LeftNav>
          <Logo to="/" />
        </LeftNav>
        <RightNav>
          <NavItem to={`/room/${Univ}`}>방 리스트</NavItem>
          <NavItem to={`/community/${Univ}`}>커뮤니티</NavItem>
          <NavItem to={"/seller"}>방 판매자 페이지</NavItem>
          {localStorage.getItem("LoggedIn") == "true" ? (
            <>
              <NavItem to={`/room/${Univ}`}>마이 페이지</NavItem>
              <NavItem to={"/logout"}> 로그아웃 </NavItem>
            </>
          ) : (
            <NavItem to={"/login"}>로그인</NavItem>
          )}
        </RightNav>
      </NavigationBar>
      <NavBlank></NavBlank>
    </>
  );
};
