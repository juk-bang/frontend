import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import {
  Logo,
  NavItem,
  LeftNav,
  RightNav,
  NavBlank,
  SubNavigationComponent
} from "Components/HeaderStyle";

import basket from "img/basket.png";

export default function Navigation({ onFilter, nav }) {
  return (
    <>
      <SubNavigationComponent ref={nav}>
        <LeftNav>
          <Logo to="/" src={basket} shrink="shrink"></Logo>
        </LeftNav>
        <RightNav>
          <NavItem onClick={onFilter} color="white">
            마이필터
          </NavItem>
          <NavItem color="white">추천필터</NavItem>
        </RightNav>
      </SubNavigationComponent>
      <NavBlank> </NavBlank>
    </>
  );
}
