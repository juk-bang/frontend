//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
//Components
import Header from "Components/Header";
import MyPage from "../MyPage/MyPage";
import { FlexContainer } from "Components/Style";

//styled-Components
const Container = styled.div``;
const AnwserContainer = styled.div``;
const ConfirmButton = styled.button`
  height: 100px;
  width: 100px;
`;

//메인함수
const Secession = ({ history }) => {
  //이벤트 핸들러
  const handleClickNo = e => {
    e.preventDefault();
    console.log(history);
    history.push(`/userinfo/${localStorage.getItem("userId")}`);
  };
  return (
    <>
      <Header />
      <FlexContainer>
        <MyPage></MyPage>
        <Container>
          <AnwserContainer>정말로 탈퇴하시겠습니까?</AnwserContainer>
          <ConfirmButton>네</ConfirmButton>
          <ConfirmButton onClick={handleClickNo}>아니요</ConfirmButton>
        </Container>
      </FlexContainer>
    </>
  );
};

export default withRouter(Secession);
