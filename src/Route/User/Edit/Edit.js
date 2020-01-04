//Reactjs Library
import React, { useState } from "react";
//ThirdParty Library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
//Components
import Header from "Components/Header";

//styled-Components
const Container = styled.div``;
const Input = styled.input``;
const SubmitButton = styled.button``;
const SubmitForm = styled.form``;

//메인함수
const Favorites = ({
  match: {
    params: { userid }
  }
}) => {
  //아이디를 저장하는 state
  const [LocalUserid, SetLocalUserid] = useState(userid);

  //이벤트 핸들러
  //id input이 바뀔때
  const handleChangeId = e => {
    SetLocalUserid(e.target.value);
  };
  //제출됬을 떄
  const handleSubmitForm = e => {
    e.preventDefault();
    localStorage.setItem("userId", LocalUserid);
  };

  return (
    <>
      <Header />
      <Container>
        <SubmitForm onSubmit={handleSubmitForm}>
          아이디
          <Input value={LocalUserid} onChange={handleChangeId} />
          <SubmitButton type="submit" />
        </SubmitForm>
      </Container>
    </>
  );
};

export default withRouter(Favorites);
