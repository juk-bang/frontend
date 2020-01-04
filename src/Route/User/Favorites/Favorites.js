//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
//Components
import Header from "Components/Header";
import MyPage from "../MyPage/MyPage";
import { FlexContainer } from "../../../Components/Style";

//styled-Components
const Container = styled.div``;

//메인함수
const Favorites = () => {
  return (
    <>
      <Header />
      <FlexContainer>
        <MyPage></MyPage>
        <Container>hello</Container>방 페이지
      </FlexContainer>
    </>
  );
};

export default Favorites;
