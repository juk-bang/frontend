import React from "react";
import { Container } from "Components/Style";
import Header from "Components/Header";
import {
  FlexContainer,
  Board,
  boxShadow,
  Color,
  CFlexContainer
} from "Components/Style";
import MyPage from "../MyPage/MyPage";
import styled from "styled-components";
import { Person } from "styled-icons/material/Person";

export const ChattingContainer = styled(Board)`
  ${boxShadow}
  margin-top : 20px;
  margin-bottom: 20px;
  padding: 0;
  width: 30rem;
  border: 2px solid ${Color.green};
`;

export const PersonIco = styled(Person)`
  height: 100px;
  content: "";
`;

export const IconContainer = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  width: inherit;
  height: 70px;
  background-color: ${Color.green};

  .headerIcon {
    font-size: 20px;
    margin-right: 20px;
  }

  .headerTitle {
    font-size: 24px;
    font-weight: 600;
  }

  .headerBackIcon {
    font-size: 22px;
    margin-left: 20px;
  }
`;

export const ChattingList = styled(CFlexContainer)`
  overflow: scroll;
  margin-top: 70px;
  height: 480px;
  width: 100%;
`;

export const ChattingItem = styled.a`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;
  ${boxShadow}
  color : black;
  .chatPartner {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 20px;
    font-weight: 800;
    color: rosybrown;

    .unwritten {
      color: white;
      background-color: red;
      border-radius: 50%;
      padding: 2px 9px;
      margin-left: 5px;
    }
  }
  .friendContent {
    width: 58%;
  }
  .recentDate {
    margin-right: 20px;
    width: 15%;
  }
  .friendIco {
    color: pink;
  }
`;
function Chatting() {
  return (
    <Container>
      <Header />
      <FlexContainer>
        <MyPage></MyPage>
        <ChattingContainer>
          <IconContainer>
            <a href="index.html" className="headerBackIcon">
              <i className="fas fa-arrow-left"></i>
            </a>
            <h1 className="headerTitle">My Chatting</h1>
            <span className="headerIcon">
              <i class="fas fa-search"></i>
            </span>
          </IconContainer>
          <ChattingList>
            <ChattingItem href="/userinfo/chatting/1/1">
              <PersonIco className="friendIco"></PersonIco>
              <div className="friendContent">
                <span className="chatPartner">
                  Lynn
                  <span className="unwritten">8</span>
                </span>
                <span className="recentMessage">Going home!</span>
              </div>

              <span className="recentDate">2019-12-31 00:00:00</span>
            </ChattingItem>
          </ChattingList>
        </ChattingContainer>
      </FlexContainer>
    </Container>
  );
}

export default Chatting;
