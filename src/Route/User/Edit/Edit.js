//Reactjs Library
import React, { useState } from "react";
//ThirdParty Library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
//Components
import Header from "Components/Header";
import MyPage from "../MyPage/MyPage";

//styled-Components
import {
  FlexContainer,
  CFlexContainer,
  boxShadow,
  Button,
  Board
} from "Components/Style";

const Input = styled.input``;

const SubmitForm = styled.form``;

const Manage = styled(CFlexContainer)`
  padding: 5px;
  content: "";
  width: 100%;
  ${Board} {
    text-align: center;

    width: 100%;
    border: 2px solid pink;
    border-radius: 10px;
    font-size: 1.7rem;
    ${boxShadow};
    div:first-child {
      font-weight: 800;
      margin-bottom: 15px;
    }
  }
  input {
    font-size: 1.5rem;
  }
`;

//메인함수
const Edit = ({
  match: {
    params: { userid }
  },
  history
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

  const handleClickNo = e => {
    e.preventDefault();
    console.log(history);
    const asw = window.confirm("정말로 삭제하시겠습니까?");
    if (asw === true) {
    }
  };

  return (
    <>
      <Header />
      <FlexContainer>
        <MyPage></MyPage>
        <Manage mt="100px" acenter>
          <SubmitForm onSubmit={handleSubmitForm}>
            <Board>
              <div>내 정보 </div>
              <Input value={LocalUserid} onChange={handleChangeId} />
              <FlexContainer jcenter mt="10px">
                <Button type="submit" radius="radius">
                  수정
                </Button>
                <Button onClick={handleClickNo} radius="radius">
                  삭제
                </Button>
              </FlexContainer>
            </Board>
          </SubmitForm>
        </Manage>
      </FlexContainer>
    </>
  );
};

export default withRouter(Edit);
