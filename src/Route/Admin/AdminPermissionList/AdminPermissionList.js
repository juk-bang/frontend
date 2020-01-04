//Reactjs Library
import React, { useEffect, useState } from "react";
//ThirdParty Library
import styled from "styled-components";
//Components
import Header from "Components/Header";
import { button, Board, Container, CFlexContainer } from "Components/Style";

import {
  getAdminPermissionList,
  postAdminPermission,
  deleteAdminPermission
} from "Components/Api";

//styled-Components

const UnivButton = styled.a`
  ${button};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 3rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const RoomContainer = styled.div`
  margin: 0 auto;
  margin-top: 5px;
  border: 2px solid pink;
  margin-top: 20px;
  width: 50%;
  display: grid;
  padding: 7px;
  grid-template-columns: repeat(4, 1fr);
  div {
    margin: 0 auto;
  }
  div:nth-child(2n + 1) {
    font-weight: 800;
  }
`;
const PermissionButton = styled.button`
  ${button};
`;

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
          <UnivButton backgroundColor="green" onClick={handleClickUniv}>
            숭실대
          </UnivButton>
          <UnivButton backgroundColor="red" onClick={handleClickUniv}>
            고려대
          </UnivButton>
        </ButtonContainer>

        {PermissionList !== undefined &&
          PermissionList !== null &&
          PermissionList.data.map(each => {
            console.log(each);
            return (
              <>
                <div id={each.id}></div>
                <RoomContainer>
                  <div>날짜 </div>
                  <div>{each.month} </div>
                  <div>관리비</div>
                  <div>{each.adminExpenses} </div>
                  <div>보증금 </div>
                  <div>{each.deposit} </div>
                  <div>층수</div>
                  <div>{each.floor}</div>
                  <div>평수</div>
                  <div>{each.scale}</div>
                  <div>거리</div>
                  <div>{each.distance} </div>
                  <div>lat</div>
                  <div>{each.lat}</div>
                  <div>lng</div>
                  <div>{each.lng}</div>
                  <div>평점</div>
                  <div>{each.grade}</div>
                  <div>평가여부</div>
                  <div>
                    {each.permission == 0
                      ? (each.permission = "아직 평가안됨")
                      : each.permission == 1
                      ? (each.permission = "허가")
                      : (each.permission = "불허가")}
                  </div>
                </RoomContainer>
                <ButtonContainer>
                  <PermissionButton onClick={handlePermissionClick}>
                    허용함
                  </PermissionButton>
                  <PermissionButton onClick={handlePermissionClick}>
                    허가 안함
                  </PermissionButton>
                </ButtonContainer>
              </>
            );
          })}
      </Container>
    </>
  );
};

export default AdminPermissionList;
