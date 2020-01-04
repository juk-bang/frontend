import React, { useEffect } from "react";
import Header from "Components/Header";
import { getRoomList } from "Components/Api";
import { withRouter } from "react-router-dom";
import { Container, Board, FlexContainer } from "Components/Style";
import ControlBox from "./ControlBox";

const RoomListPresenter = ({
  match: {
    params: { univid }
  }
}) => {
  useEffect(() => {
    const checkError = async () => {
      await getRoomList(univid);
    };
    checkError();
  }, []);

  return (
    <Container style={{ height: "100vh", overflowY: "hidden" }}>
      <Header />
      <FlexContainer>
        <Board width="50%" p="0px"></Board>
        <Board width="50%" p="0px">
          <ControlBox></ControlBox>
        </Board>
      </FlexContainer>
    </Container>
  );
};

export default withRouter(RoomListPresenter);
