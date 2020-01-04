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
const AdminHome = () => {
  return (
    <>
      <Header />
      <Container>
        <LinkStyle
          to={`/admin/permissionroom/${localStorage.getItem("userId")}`}
        >
          Permission List
        </LinkStyle>
        <LinkStyle to={`/admin/report/${localStorage.getItem("userId")}`}>
          신고
        </LinkStyle>
      </Container>
    </>
  );
};

export default AdminHome;
