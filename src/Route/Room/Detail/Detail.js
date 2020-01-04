import React, { useState, useRef } from "react";

import styled, { css } from "styled-components";
import air from "img/airconditioner.png";
import el from "img/elevator.png";

// import map from "img/map.png";
import subway from "img/subway.png";
import bus from "img/bus.png";
import cctv from "img/cctv.png";

import { IoIosHeart } from "react-icons/io";
import { AiTwotoneAlert, AiFillWechat } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { MdMap } from "react-icons/md";
// import FloorPicture from "../img/floorPicture.png";
export const CFlexComponent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${({ color }) =>
    css`
      background-color: ${color};
    `}

`;

export const FlexComponent = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const InformationComponent = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  h3 {
    font-size: 1.2rem;
    line-height: 1.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  p {
    display: block;
    line-height: 1.6rem;
    font-size: 0.7rem;
    margin-top: 0;
    background: pink;
    padding: 17px;
    border-radius: 7px;
  }

  .icon img {
    width: 50px;
    height: 50px;
    color: pink;
    margin-right: 15px;
    border-radius: 5px;
    border: 1px solid pink;
    padding: 3px;
  }
`;

const RightBar = styled.div`
  position: fixed;
  top: 70px;
  right: 10px;
  width: 30%;
  border: 1px solid #54d5a6;
  padding-bottom: 10px;
  border-radius: 7px;
  background-color: white;
  box-sizing: border-box;
`;

const ButtonBar = styled.div`
  width: 100%;
  height: 40px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  margin-bottom: 10px;
  background-color: #54d5a6;
`;

const Button = styled.div`
  height: 20px;
  font-size: 30px;
  min-width: fit-content;
  padding: 2px;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const RoomInfo = styled.div`
  display: grid;
  padding: 7px;
  grid-template-columns: repeat(2, 1fr 2fr);
  div {
    border-bottom: 1px dashed pink;
    line-height: 2rem;
    margin-bottom: 10px;
    font-size: 12px;
    text-align: center;
    &:nth-child(2n + 1) {
      font-weight: bold;
    }
  }
`;

const ManagerIcon = styled.div`
  font-size: 70px;
  min-width: fit-content;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 10px;
`;

const ChattingButton = styled.div`
  font-size: 2rem;
  color: white;
  background-color: pink;
  border-radius: 30px;
  padding: 2px 7px;

  max-width: fit-content;
  margin-right: 5px;
  height: 2rem;
`;

const ReviewScroll = styled.div`
  height: 400px;
  overflow: scroll;
`;
const ReviewComponent = styled.div`
  border: 1px solid pink;
  padding: 10px;
  margin-bottom: 3px;
  & > h3 {
    font-size: 1rem;
    border-color: pink;
  }
  input {
    border: none;
    width: 80%;
  }
  input:first-child {
    border-bottom: 1px solid pink;
  }
  input:last-child {
  }
`;

const FloorComponent = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 100vh;
  height: 70vh;
 
`;

function Detail(props) {
  const { location, history, match } = props;

  if (location.state === undefined) {
    history.push("/");
  }

  const { money, distance, area, type, poster } = location.state;
  const picture = [
    poster,
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
    poster
  ];
  const Floor = styled.div`
    position: fixed;
    font-size: 50px;
    color: pink;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    z-index: 1000;
  `;

  function floor() {
    const f = document.getElementById("floor");
    console.log(f);

    if (f.style.display === "block") {
      f.style.display = "none";
    } else {
      f.style.display = "block";
    }
  }

  return (
    <>
      <FloorComponent id="floor"></FloorComponent>
      <div style={{ backgroundColor: "white", display: "flex" }}>
        <Floor onClick={floor}>
          <MdMap></MdMap>
        </Floor>

        <CFlexComponent style={{ width: "70%", marginTop: "20px" }}>
          {/* <Picture picture={picture}></Picture> */}
          <InformationComponent>
            <h3>방정보</h3>
            <RoomInfo>
              <div>주소</div>
              <div>서울특별시 관악구 신림동</div>
              <div>통학거리</div>
              <div>100m</div>
              <div>건물형태</div>
              <div>원룸</div>
              <div>가격</div>
              <div>2000만원/58만원</div>
              <div>면적</div>
              <div>20.0m2 (6P) / 12.0m2 (4P)</div>
              <div>관리비</div>
              <div>50만원</div>
              <div>층수</div>
              <div>2층</div>
            </RoomInfo>
          </InformationComponent>
          <InformationComponent>
            <h3>옵션</h3>
            <div className="icon">
              <img src={air} alt=""></img>
              <img src={el} alt=""></img>
              <img src={cctv} alt=""></img>
            </div>
          </InformationComponent>
          <InformationComponent>
            <h3>주변시설</h3>
            <div className="icon">
              <img src={subway} alt=""></img>
              <img src={bus} alt=""></img>

            </div>
          </InformationComponent>
          <InformationComponent>
            <h3>상세설명</h3>
            <p>
              "제주도로 직장을 옮기게 되어 방 내놓습니다. <br></br>
              1. 이쁘게 인테리어 되어있는 복층 원룸입니다. <br></br> 2. 복층에
              열선이 깔려있어서 겨울에도 따뜻합니다. <br></br>3. 큰 길 바로
              옆이고 바로 앞에 버스정류장이 있습니다. <br></br>4. 건물 바로
              뒤로는 놀이터와 어린이집이 있습니다. <br></br>5. 건물 입구 및 복도
              층마다 cctv가 있습니다. <br></br>6. 신대방역까지는 걸어서는 10분
              정도 걸립니다. 버스타면 신림역 신대방역 5분 이내 도착. <br></br>{" "}
              7. 주변 까페, 식당, 다이소, 병원, 헬스장, 편의점이 3분 거리에
              있습니다.
              <br></br> 8. 관리실에 필요한 사항 말씀해주시면 바로바로
              조치해주십니다. - 좋은 분이 좋은 곳에 사셨으면 좋겠습니다.
              감사합니다."
            </p>
          </InformationComponent>

          <InformationComponent>
            <h3>위치정보</h3>

            {/* <img src={map} alt="" width="100%"></img> */}
          </InformationComponent>

          <InformationComponent>
            <h3>리뷰</h3>
            <ReviewComponent>
              <FlexComponent>
                <CFlexComponent>
                  <input placeholder="리뷰제목을 입력하세요"></input>

                  <input placeholder="리뷰를 작성하세요"></input>
                </CFlexComponent>
                <ChattingButton>
                  <AiFillWechat></AiFillWechat>
                </ChattingButton>
              </FlexComponent>
            </ReviewComponent>
            <ReviewScroll>
              <ReviewComponent>
                <h3>여기 좋아여</h3>
                <h5>내부시설이 끝내줍니당</h5>
              </ReviewComponent>
              <ReviewComponent>
                <h3>여기 좋아여</h3>
                <h5>내부시설이 끝내줍니당</h5>
              </ReviewComponent>
              <ReviewComponent>
                <h3>여기 좋아여</h3>
                <h5>내부시설이 끝내줍니당</h5>
              </ReviewComponent>
              <ReviewComponent>
                <h3>여기 좋아여</h3>
                <h5>내부시설이 끝내줍니당</h5>
              </ReviewComponent>
              <ReviewComponent>
                <h3>여기 좋아여</h3>
                <h5>내부시설이 끝내줍니당</h5>
              </ReviewComponent>
              <ReviewComponent>
                <h3>여기 좋아여</h3>
                <h5>내부시설이 끝내줍니당</h5>
              </ReviewComponent>
              <ReviewComponent>
                <h3>여기 좋아여</h3>
                <h5>내부시설이 끝내줍니당</h5>
              </ReviewComponent>
            </ReviewScroll>
          </InformationComponent>
        </CFlexComponent>

        <right>
          <RightBar>
            <ButtonBar>
              <FlexComponent style={{ justifyContent: "space-around" }}>
                <Button>
                  <AiTwotoneAlert></AiTwotoneAlert>
                </Button>
                <Button>5.2 </Button>
                <Button>
                  <IoIosHeart></IoIosHeart>
                </Button>
              </FlexComponent>
            </ButtonBar>
            <CFlexComponent>
              <FlexComponent
                style={{
                  height: "100px",

                  alignItems: "flex-start",
                  justifyContent: "flex-start"
                }}
              >
                <ManagerIcon>
                  <GoPerson></GoPerson>
                </ManagerIcon>
                <CFlexComponent
                  style={{ alignItems: "flex-start", overflow: "hidden" }}
                >
                  <h2>홍길동</h2>
                  <div>올린매물 : 10개</div>
                </CFlexComponent>
                <ChattingButton>
                  <AiFillWechat></AiFillWechat>
                </ChattingButton>
              </FlexComponent>
              계약일자 : xx/xx/xx
            </CFlexComponent>
          </RightBar>
        </right>
      </div>
    </>
  );
}

export default Detail;
