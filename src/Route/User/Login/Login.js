//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
//Components
import Header from "Components/Header";

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginInput = styled.input``;
const LoginForm = styled.form``;
const LoginButton = styled.button``;

//메인 함수
const Login = props => {
  //이벤트 핸들러
  //로그인을 했을 때
  const handleLoginSubmit = e => {
    e.preventDefault();
    localStorage.setItem("userId", e.target.children[0].value);
    localStorage.setItem("LoggedIn", true);
    props.history.goBack();
  };

  return (
    <>
      <Header />
      <Container>
        <LoginForm onSubmit={handleLoginSubmit}>
          <LoginInput />
          <LoginInput type="password" />
          <LoginButton type="submit" />
        </LoginForm>
      </Container>
    </>
  );
};

export default withRouter(Login);
