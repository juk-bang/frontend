//Reactjs Library
import React, { useEffect, useState } from "react";
//ThirdParty Library
import styled from "styled-components";
//Components
import Header from "Components/Header";
import {
  getAdminPermissionList,
  postAdminPermission,
  deleteAdminPermission
} from "Components/Api";

//styled-Components
const Container = styled.div``;
const UnivButton = styled.button``;
const ButtonContainer = styled.div``;
const RoomContainer = styled.div``;
const PermissionButton = styled.button``;

//메인함수
const AdminPermissionList = () => {
  let [PermissionList, SetPermissionList] = useState();
  let [currentUniv, setCurrentuniv] = useState();

  const GetPermissionList = async univid => {
    PermissionList = await getAdminPermissionList(univid);
    await SetPermissionList(PermissionList);
  };

  const handleClickUniv = async e => {
    if (e.target.innerText == "숭실대") {
      await GetPermissionList("1");
      currentUniv = "1";
      setCurrentuniv(currentUniv);
    } else if (e.target.innerText == "고려대") {
      await GetPermissionList("2");
      currentUniv = "2";
      setCurrentuniv(currentUniv);
    }
    console.log(PermissionList);
  };

  const handlePermissionClick = async e => {
    if (e.target.innerText == "허가") {
      await postAdminPermission(
        currentUniv,
        e.target.previousElementSibling.id
      );
    } else if (e.target.innerText == "허가 안함") {
      await deleteAdminPermission(
        currentUniv,
        e.target.previousElementSibling.previousElementSibling.id
      );
    }
    await window.location.reload();
  };
  return (
    <>
      <Header />
      <Container>
        <ButtonContainer>
          <UnivButton onClick={handleClickUniv}>숭실대</UnivButton>
          <UnivButton onClick={handleClickUniv}>고려대</UnivButton>
        </ButtonContainer>
        {PermissionList !== undefined &&
          PermissionList !== null &&
          PermissionList.data.map(each => {
            console.log(each);
            return (
              <RoomContainer>
                <div id={each.id}></div>
                {each.month} {each.adminExpenses} {each.deposit} {each.floor}
                {each.scale} {each.distance} {each.lat} {each.lng} {each.grade}
                {each.permission}
                <PermissionButton onClick={handlePermissionClick}>
                  허가
                </PermissionButton>
                <PermissionButton onClick={handlePermissionClick}>
                  허가 안함
                </PermissionButton>
              </RoomContainer>
            );
          })}
      </Container>
    </>
  );
};

export default AdminPermissionList;
