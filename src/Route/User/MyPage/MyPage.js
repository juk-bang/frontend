//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//Component
import Header from "Components/Header";

//style
import { Container, CFlexContainer, Color } from "Components/Style";

const NavButton = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 20px;
  padding-left: 10px;

  font-size: 1.4rem;
  font-weight: 700;

  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  width: 150%;

  &:hover {
    background-color: ${Color.mint};
    opacity: 0.8;
  }
`;

const MyPage = () => {
  const userId = localStorage.getItem("userId");
  const activeStyle = {
    backgroundColor: Color.mint
  };
  return (
    <CFlexContainer pt="70px" pl="30px" width="100px">
      <NavButton to={`/userinfo/edit/${userId}`} activeStyle={activeStyle}>
        정보수정
      </NavButton>
      <NavButton to={`/userinfo/chatting/${userId}`} activeStyle={activeStyle}>
        쪽지
      </NavButton>
      <NavButton to={`/userinfo/favorites/${userId}`} activeStyle={activeStyle}>
        찜목록
      </NavButton>
      <NavButton to={`/userinfo/posts/${userId}`} activeStyle={activeStyle}>
        내가쓴 글
      </NavButton>
    </CFlexContainer>
  );
};

export default MyPage;
