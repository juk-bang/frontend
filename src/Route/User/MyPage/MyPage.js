//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { Link } from "react-router-dom";
//Component
import Header from "Components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyPage = () => {
  const userId = localStorage.getItem("userId");
  return (
    <>
      <Header />
      <Container>
        <Link to={`/userinfo/edit/${userId}`}>정보 수정</Link>
        <Link to={`/userinfo/secession/${userId}`}>회원 탈퇴</Link>
        <Link to={`/userinfo/favorites/${userId}`}>찜목록</Link>
        <Link to={`/userinfo/posts/${userId}`}>게시글 목록</Link>
      </Container>
    </>
  );
};

export default MyPage;
