//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { Link } from "react-router-dom";
//Components
import Header from "Components/Header";
import { button, Board, Container, CFlexContainer } from "Components/Style";

//styled-Components

const LinkStyle = styled(Link)`
  ${button};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 3rem;
`;

//메인함수
const AdminHome = () => {
  return (
    <Container>
      <Header />

      <CFlexContainer width="100%" style={{ width: "100%" }} acenter jcenter>
        <Board style={{ textAlign: "center" }} width="100%">
          <LinkStyle
            to={`/admin/permissionroom/${localStorage.getItem("userId")}`}
          >
            Permission List
          </LinkStyle>
          <LinkStyle to={`/admin/report/${localStorage.getItem("userId")}`}>
            신고
          </LinkStyle>
        </Board>
      </CFlexContainer>
    </Container>
  );
};

export default AdminHome;
