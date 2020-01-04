//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { Link } from "react-router-dom";
//Components
import Header from "Components/Header";

//styled-Components
const Container = styled.div``;
const LinkStyle = styled(Link)``;

//메인함수
const Favorites = () => {
  return (
    <>
      <Header />
      <Container>
        <LinkStyle to={`/manager/roomlist/${localStorage.getItem("userId")}`}>
          RoomList
        </LinkStyle>
        <LinkStyle to={`/manager/newroom/${localStorage.getItem("userId")}`}>
          방 만들기
        </LinkStyle>
      </Container>
    </>
  );
};

export default Favorites;
