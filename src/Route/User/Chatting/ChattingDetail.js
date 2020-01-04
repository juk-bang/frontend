import React from "react";
import Header from "Components/Header";
import {
  FlexContainer,
  Container,
  Board,
  boxShadow,
  Color,
  CFlexContainer
} from "Components/Style";
import MyPage from "../MyPage/MyPage";
import {
  ChattingContainer,
  IconContainer,
  ChattingList,
  ChattingItem,
  PersonIco
} from "./Chatting";
import styled, { css } from "styled-components";

const ChatDetailContainer = styled(ChattingContainer)`
  .writeContainer {
    width: 90%;

    margin: 0 auto;

    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chatWrite {
    margin: 0 auto;
    bottom: 0px;

    border-radius: 0;
    padding: 20px 40px;
    width: 100%;
    border: none;
    font-size: 17px;
    transition: width 0.5s ease-in, border-radius 0.5s ease-in,
      transform 0.5s ease-in;
  }

  .chat__icon-right {
    margin-right: 10px;
    width: 50px;
    font-size: 30px;
  }

  .message {
    font-size: 1.3rem;
    font-weight: 800;
  }
`;

const ChattingBody = styled(ChattingItem)`
  background-color: aqua;
  margin: 5px 10px;
  width: 60%;
  padding: 0;
  border-radius: 9px;

  ${({ me }) =>
    me &&
    css`
      position: relative;
      left: 33%;
      background-color: rosybrown;
    `}
`;

function ChattingDetail() {
  return (
    <Container>
      <Header />
      <FlexContainer>
        <MyPage></MyPage>
        <ChatDetailContainer>
          <IconContainer>
            <a href="/userinfo/chatting/1" className="headerBackIcon">
              <i className="fas fa-arrow-left"></i>
            </a>
            <h1 className="headerTitle">죽방씌</h1>
            <span className="headerIcon">
              <i class="fas fa-search"></i>
            </span>
          </IconContainer>
          <ChattingList>
            <ChattingBody>
              <PersonIco className="friendIco"></PersonIco>
              <div className="friendContent">
                <span className="message">Going home!</span>
              </div>

              <span className="recentDate">2019-12-31 00:00:00</span>
            </ChattingBody>
            <ChattingBody>
              <PersonIco className="friendIco"></PersonIco>
              <div className="friendContent">
                <span className="message">Going home!</span>
              </div>

              <span className="recentDate">2019-12-31 00:00:00</span>
            </ChattingBody>
            <ChattingBody me={true}>
              <PersonIco className="friendIco"></PersonIco>
              <div className="friendContent">
                <span className="message">What the xxx</span>
              </div>

              <span className="recentDate">00:00:00</span>
            </ChattingBody>
            <ChattingBody me={true}>
              <PersonIco className="friendIco"></PersonIco>
              <div className="friendContent">
                <span className="message">What the xxx</span>
              </div>

              <span className="recentDate">00:00:00</span>
            </ChattingBody>
            <ChattingBody me={true}>
              <PersonIco className="friendIco"></PersonIco>
              <div className="friendContent">
                <span className="message">What the xxx</span>
              </div>

              <span className="recentDate">00:00:00</span>
            </ChattingBody>
            <ChattingBody me={true}>
              <PersonIco className="friendIco"></PersonIco>
              <div className="friendContent">
                <span className="message">What the xxx</span>
              </div>

              <span className="recentDate">00:00:00</span>
            </ChattingBody>
          </ChattingList>
          <div class="writeContainer">
            <input class="chatWrite" type="text" placeholder="Send message" />

            <div class="chat__icon-right">
              <span>
                <i class="far fa-smile-wink"></i>
              </span>
            </div>
          </div>
        </ChatDetailContainer>
      </FlexContainer>
    </Container>
  );
}

export default ChattingDetail;
