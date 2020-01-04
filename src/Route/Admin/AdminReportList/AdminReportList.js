//Reactjs Library
import React, { useEffect, useState } from "react";
//ThirdParty Library
import styled from "styled-components";
//Components
import Header from "Components/Header";
import { getAdminReportList } from "Components/Api";

//styled-Components
const Container = styled.div``;
const UnivButton = styled.button``;
const ButtonContainer = styled.div``;

//메인함수
const AdminReportList = () => {
  let [ReportList, SetReportList] = useState();
  let [currentUniv, setCurrentuniv] = useState();

  const getAdminReportLists = async univid => {
    ReportList = await getAdminReportList(univid);
    await SetReportList(ReportList);
  };
  const handleClickUniv = async e => {
    if (e.target.innerText == "숭실대") {
      await getAdminReportLists("1");
      currentUniv = "1";
      setCurrentuniv(currentUniv);
    } else if (e.target.innerText == "고려대") {
      await getAdminReportLists("2");
      currentUniv = "2";
      setCurrentuniv(currentUniv);
    }
    console.log(ReportList);
  };
  return (
    <>
      <Header />

      <Container>
        <ButtonContainer>
          <UnivButton onClick={handleClickUniv}>숭실대</UnivButton>
          <UnivButton onClick={handleClickUniv}>고려대</UnivButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default AdminReportList;
