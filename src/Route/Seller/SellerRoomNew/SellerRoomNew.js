//Reactjs Library
import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
//ThirdParty Library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
//Components
import Header from "Components/Header";
import { postManagerRoom } from "Components/Api";
import { Container, button } from "Components/Style";
import { FlexContainer, CFlexContainer } from "../../../Components/Style";

Geocode.setApiKey("AIzaSyA5dcQNQLNnj6Tw8B49RnZDTJIBF6TA9Uk");
Geocode.setLanguage("ko");
Geocode.setRegion("kr");
Geocode.enableDebug();

//styled-components
const SelectUniv = styled.select`
  border: 2px solid pink;
`;
const OptionUniv = styled.option``;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const InputTitle = styled.div`
  margin-bottom: 10px;
  font-size: 1.4rem;

  font-weight: 600;
`;
const SubmitForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  #map {
    margin-top: 10px;
  }
`;
const SubmitButton = styled.button`
  ${button}

  width: 100px;
  padding: 10px;
  margin-bottom: 20px;
`;

const InputGrid = styled.div`
  display: grid;

  width: 70%;

  grid-template-columns: repeat(2, 1fr 2fr);

  div {
    height: 30px;
    border-bottom: 1px dashed pink;
    line-height: 23px;

    font-size: 13px;
    text-align: center;

    &:nth-child(2n + 1) {
      font-weight: bold;
    }
  }

  input {
    border: 0;
  }
`;
const InputInput = styled.input`
  margin-top: 20px;
  width: 50%;
  border: 3px solid pink;
  padding: 5px;
`;

const InputTextArea = styled.textarea`
  width: 500px;
  height: 300px;
  resize: none;
  background-color: pink;
  border: 0;
  border-radius: 10px;
`;
const InputCheckBox = styled.input``;
const InputCheckBoxLabel = styled.label`
  width: 100px;
`;
const InputImage = styled.input``;

//메인함수
const SellerRoomNew = ({ history }) => {
  const [MapState, SetMapState] = useState({
    map: "",
    center: {
      lat: 37.496345,
      lng: 126.957395
    },
    ref: React.useRef(null),
    address: ""
  });
  const [PictureState, SetPictureState] = useState({
    file: []
  });
  const [NewState, SetNewState] = useState({
    univid: "",
    pictureCount: "",
    roomInformation: {
      address: "",
      structure: "",
      scale: "",
      floor: "",
      price: {
        month: "",
        adminExpenses: "",
        deposit: ""
      }
    },
    extraOption: {
      elevator: false,
      park: false,
      cctv: false,
      autoDoor: false,
      washingMachine: false,
      gasrange: false,
      refrigerator: false,
      airconditioner: false
    },
    description: "",
    location: {
      lat: "",
      lng: ""
    },
    facilities: {
      busStation: "",
      subwayStation: ""
    }
  });

  let map;
  //첫 랜더때 실행
  useEffect(() => {
    map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: new window.google.maps.LatLng(
        MapState.center.lat,
        MapState.center.lng
      ),
      mapTypeId: "roadmap"
    });
    MapState.map = map;
    SetMapState({
      ...MapState,
      map: map
    });

    window.google.maps.event.addListener(map, "click", function(e) {
      NewState.location.lat = e.latLng.lat();
      NewState.location.lng = e.latLng.lng();
      SetNewState({
        ...NewState
      });
      Geocode.fromLatLng(e.latLng.lat(), e.latLng.lng()).then(response => {
        const address = response.results[0].formatted_address;
        NewState.roomInformation.address = address;
        SetNewState({
          ...NewState
        });
        MapState.address = address;
        SetMapState({
          ...MapState
        });
      });
    });
  }, []);

  //이벤트 핸들러
  //제출 했을 때
  const handleAllSubmitForm = e => {
    e.preventDefault();
    if (e.target.elements[0].value == "숭실대") {
      NewState.univid = 1;
    } else if (e.target.elements[0].value == "고려대") {
      NewState.univid = 2;
    }

    NewState.roomInformation.structure = 1;
    NewState.roomInformation.scale = e.target.elements[8].value;
    NewState.roomInformation.floor = e.target.elements[9].value;
    NewState.roomInformation.price.month = e.target.elements[10].value;
    NewState.roomInformation.price.adminExpenses = e.target.elements[11].value;
    NewState.roomInformation.price.deposit = e.target.elements[12].value;
    NewState.description = e.target.elements[13].value;
    NewState.extraOption.elevator = e.target.elements[14].checked;
    NewState.extraOption.park = e.target.elements[15].checked;
    NewState.extraOption.cctv = e.target.elements[16].checked;
    NewState.extraOption.autoDoor = e.target.elements[17].checked;
    NewState.extraOption.washingMachine = e.target.elements[18].checked;
    NewState.extraOption.gasrange = e.target.elements[19].checked;
    NewState.extraOption.refrigerator = e.target.elements[20].checked;
    NewState.extraOption.airconditioner = e.target.elements[21].checked;

    NewState.facilities.busStation = e.target.elements[22].checked;
    NewState.facilities.subwayStation = e.target.elements[23].checked;

    let pictureList = [];
    pictureList.push(e.target.elements[24].files[0]);
    pictureList.push(e.target.elements[25].files[0]);
    console.log(e.target.elements[24].files[0]);
    if (e.target.elements[26].files.length == 1) {
      pictureList.push(e.target.elements[26].files[0]);
    }
    if (e.target.elements[27].files.length == 1) {
      pictureList.push(e.target.elements[27].files[0]);
    }
    if (e.target.elements[28].files.length == 1) {
      pictureList.push(e.target.elements[28].files[0]);
    }
    if (e.target.elements[29].files.length == 1) {
      pictureList.push(e.target.elements[29].files[0]);
    }
    SetNewState({
      ...NewState
    });

    postManagerRoom(NewState, pictureList, NewState.univid, history);
  };
  //대학교 선택했을 때
  const handleChangeUniv = e => {
    if (e.target.value == "숭실대") {
      MapState.center = {
        lat: 37.496345,
        lng: 126.957395
      };
      SetMapState({
        ...MapState
      });
    } else if (e.target.value == "고려대") {
      MapState.center = {
        lat: 37.590833,
        lng: 127.027606
      };
      SetMapState({
        ...MapState
      });
    }
    MapState.map.panTo(MapState.center);
  };

  return (
    <>
      <Header />
      <Container>
        <SubmitForm onSubmit={handleAllSubmitForm}>
          <InputContainer>
            <InputTitle>학교를 선택하세요</InputTitle>
            <SelectUniv onChange={handleChangeUniv}>
              <OptionUniv>-</OptionUniv>
              <OptionUniv>숭실대</OptionUniv>
              <OptionUniv>고려대</OptionUniv>
            </SelectUniv>
          </InputContainer>
          <InputContainer>
            <InputTitle placeholder="지도를 클릭하면 주소가 표시됩니다.">
              위치를 선택하세요
            </InputTitle>
            <div id="map" style={{ width: "500px", height: "500px" }} />
            <InputInput value={MapState.address}></InputInput>
          </InputContainer>
          <InputContainer>
            <InputTitle>방정보</InputTitle>
            <InputGrid>
              <InputTitle>방 크기</InputTitle>
              <div>
                <input type="number"></input>
              </div>
              <InputTitle>월세</InputTitle>
              <div>
                {" "}
                <input type="number"></input>
              </div>
              <InputTitle>관리비</InputTitle>
              <div>
                {" "}
                <input type="number"></input>
              </div>
              <InputTitle>보증금</InputTitle>
              <div>
                <input type="number"></input>
              </div>
              <InputTitle>층 (*지하는 -1, 반지하는 -0.5)</InputTitle>
              <div>
                <input type="number"></input>
              </div>
            </InputGrid>
          </InputContainer>
          <InputContainer>
            <InputTitle>추가설명</InputTitle>
            <InputTextArea></InputTextArea>
          </InputContainer>
          <InputContainer>
            <InputTitle>추가 옵션 (맞는 것만)</InputTitle>
            <FlexContainer>
              <InputCheckBox type="checkbox" id="elevator" name="elevator" />
              <InputCheckBoxLabel for="elevator">엘레베이터</InputCheckBoxLabel>
              <InputCheckBox type="checkbox" id="park" name="park" />
              <InputCheckBoxLabel for="park">주차장</InputCheckBoxLabel>
              <InputCheckBox type="checkbox" id="cctv" name="cctv" />
              <InputCheckBoxLabel for="cctv">cctv</InputCheckBoxLabel>
              <InputCheckBox type="checkbox" id="autoDoor" name="autoDoor" />
              <InputCheckBoxLabel for="autoDoor">자동문</InputCheckBoxLabel>
            </FlexContainer>
            <FlexContainer>
              <InputCheckBox
                type="checkbox"
                id="washingMachine"
                name="washingMachine"
              />
              <InputCheckBoxLabel for="washingMachine">
                세탁기
              </InputCheckBoxLabel>
              <InputCheckBox type="checkbox" id="gasrange" name="gasrange" />
              <InputCheckBoxLabel for="gasrange">가스레인지</InputCheckBoxLabel>
              <InputCheckBox
                type="checkbox"
                id="refrigerator"
                name="refrigerator"
              />
              <InputCheckBoxLabel for="refrigerator">냉장고</InputCheckBoxLabel>
              <InputCheckBox
                type="checkbox"
                id="airconditioner"
                name="airconditioner"
              />
              <InputCheckBoxLabel for="airconditioner">
                에어컨
              </InputCheckBoxLabel>
            </FlexContainer>
          </InputContainer>

          <InputContainer>
            <InputTitle>주변시설(맞는 것만)</InputTitle>

            <FlexContainer>
              <InputCheckBox
                type="checkbox"
                id="busStation"
                name="busStation"
              />
              <InputCheckBoxLabel for="busStation">
                버스정류장
              </InputCheckBoxLabel>
              <InputCheckBox
                type="checkbox"
                id="subwayStation"
                name="subwayStation"
              />
              <InputCheckBoxLabel for="subwayStation">
                지하철역
              </InputCheckBoxLabel>
            </FlexContainer>
          </InputContainer>
          <InputContainer>
            <InputTitle>평면도 넣으세요(필수)</InputTitle>
            <InputImage type="file"></InputImage>
          </InputContainer>
          <InputContainer>
            <InputTitle>사진 넣으세요(필수)</InputTitle>
            <InputImage type="file"></InputImage>
          </InputContainer>
          <InputContainer>
            <InputTitle>사진 넣으세요(선택)</InputTitle>
            <InputImage type="file"></InputImage>
            <InputImage type="file"></InputImage>
            <InputImage type="file"></InputImage>
            <InputImage type="file"></InputImage>
          </InputContainer>
          <SubmitButton type="submit">제출하기</SubmitButton>
        </SubmitForm>
      </Container>
    </>
  );
};

export default withRouter(SellerRoomNew);
