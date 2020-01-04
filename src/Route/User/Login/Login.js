//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
//Components
import Header from "Components/Header";
import { Container, FlexContainer, CFlexContainer, Color, Button } from "../../../Components/Style";

const LoginInput = styled.input``;
const LoginForm = styled.form`
 border: 2px solid pink;
  padding: 15px;
  border-radius: 7px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    font-size: 20px;
    margin-bottom: 7px;
  }
  button {
    margin-top: 10px;
  }
  label {
    font-size: 15px;
  }
`;
const LoginButton = styled.button``;

//메인 함수
const Login = props => {
  //이벤트 핸들러
  //로그인을 했을 때
  const handleLoginSubmit = e => {
    e.preventDefault();
    localStorage.setItem("userId", e.target.elements[0].value);
    localStorage.setItem("LoggedIn", true);
    props.history.goBack();
  };

  return (
    <Container>
      <Header />
      <FlexContainer width = "100%" jcenter mt="100px">
        <CFlexContainer acenter>
          <div
            style={{
              fontWeight: "800",
              fontSize: "30px",
              color: Color.deepPink
            }}
          >
            로그인
          </div>
        <LoginForm onSubmit={handleLoginSubmit}>
        <label for="userid">아이디</label>
          <LoginInput id="userid"/>
          <label for="userpassword">비밀번호</label>
          <LoginInput id="userpassword" type="password" />
          <Button type="submit" >로그인</Button>
        </LoginForm>
      </CFlexContainer>
      </FlexContainer>
      </Container>
      
  );
};

export default withRouter(Login);
