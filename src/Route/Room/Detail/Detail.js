import React, { useState, useRef, useEffect } from "react";

import styled, { css, keyframes } from "styled-components";
import Header from "Components/Header";
import elevator from "img/elevator.png";
import subway from "img/subway.png";
import bus from "img/bus.png";
import cctv from "img/cctv.png";
import airconditioner from "img/airconditioner.png";
import autoDoor from "img/autoDoor.png";

import gasrange from "img/gasrange.png";
import park from "img/park.png";
import washingMachine from "img/washingMachine.png";
import refrigerator from "img/refrigerator.png";

import { Heart } from "styled-icons/boxicons-regular/Heart";

import { ArrowBackIos } from "styled-icons/material/ArrowBackIos";
import { ArrowForwardIos } from "styled-icons/material/ArrowForwardIos";

import { Person } from "styled-icons/material/Person";
import { Wechat2 } from "styled-icons/remix-fill/Wechat2";
import { AddAlert } from "styled-icons/material/AddAlert";
import { Color, FlexContainer } from "Components/Style";
import { Container } from "Components/Style";
import { MapAlt } from "styled-icons/boxicons-regular/MapAlt";

import FloorPlan from "./FloorPlan";
import { getRoomDetail, getReviewList, postReview } from "Components/Api";
import { withRouter } from "react-router-dom";

/*사람 아이콘 */
const PersonIco = styled(Person)`
  height: 100px;
  content: "";
  margin-right: 10px;
`;
/*채팅 아이콘 */
const ChattingIco = styled(Wechat2)`
  color: ${Color.deepPink};
  height: 50px;
  content: "";
  margin-left: 15px;
  cursor: pointer;
`;
/*사진 이동 버튼 위치제어를 위한 함수 */
const checkDirection = direction => {
  if (direction === "forward") {
    return css`
      left: 100%;
      transform: translate(-60px, -25px);
    `;
  } else if (direction === "back") {
    return css`
      transform: translateY(-25px);
    `;
  }
};

const ButtonComponent = css`
  color: whitesmoke;

  cursor: pointer;
  position: absolute;

  top: 50%;

  ${({ direction }) => checkDirection(direction)}

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`;
/*사진 뒤로 가기 아이콘 */
const BackIco = styled(ArrowBackIos)`
  ${ButtonComponent};
  height: 50px;
  width: 70px;
  content: "";
`;
/*사진 앞으로 가기 아이콘 */
const ForwardIco = styled(ArrowForwardIos)`
  ${ButtonComponent};
  height: 50px;
  width: 70px;
  content: "";
`;
/*좋아요 아이콘 */
const HeartIco = styled(Heart)`
  content: "";
  width: 25px;
`;
/*신고 아이콘 */
const AlertIco = styled(AddAlert)`
  content: "";
  width: 25px;
`;

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
/*옵션과 주변시설 아이콘 */
const OptionIcon = styled.img`
  width: 50px;
  height: 50px;
  color: pink;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid pink;
  padding: 3px;

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`;
const FloorIco = styled(MapAlt)`
  color: pink;
  height: 60px;
  width: 80px;

  content: "";
`;

/*방정보 담는 컨테이너 */
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
`;
/*오른쪽 고정 창 컨테이너 */
const RightBar = styled.div`
  position: fixed;
  top: 70px;
  right: 10px;
  width: 30%;
  border: 1px solid #54d5a6;
  padding-bottom: 10px;
  margin-right: 20px;
  border-radius: 7px;
  background-color: white;
  box-sizing: border-box;
`;
/*오른쪽 고정 창 컨테이너 안 버튼 레이어*/
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

export const PictureBoxComponent = styled.div`
  height: 300px;
  width: 70%;
  margin: 0 5px;
  margin-bottom: 20px;
  position: relative;
`;

function Picture({ picture }) {
  const [current, setCurrent] = useState(1);
  const length = picture.length;

  return (
    <PictureBoxComponent>
      <BackIco
        direction="back"
        visible={current === 1 ? false : true}
        onClick={() => {
          if (current !== 1) setCurrent(current - 1);
        }}
      ></BackIco>

      <img
        style={{ height: "100%", width: "100%" }}
        src={picture[current]}
        alt=""
      ></img>

      <ForwardIco
        direction="forward"
        visible={current === length - 1 ? false : true}
        onClick={() => {
          if (current !== length - 1) setCurrent(current + 1);
        }}
      ></ForwardIco>
    </PictureBoxComponent>
  );
}

function Detail({
  location,
  history,
  match: {
    params: { univid, roomid }
  }
}) {
  let [RoomInfomation, SetRoomInfomation] = useState();
  const getRoqomDetails = async () => {
    const detail = await getRoomDetail(univid, roomid);
    RoomInfomation = detail.data;
    SetRoomInfomation(RoomInfomation);
  };

  let [ReviewList, SetReviewList] = useState();
  const getReviewLists = async () => {
    const detail = await getReviewList(univid, roomid);
    ReviewList = detail.data;
    SetReviewList(ReviewList);
    console.log(ReviewList);
  };

  useEffect(() => {
    getRoqomDetails();
    getReviewLists();
  }, []);
  console.log(RoomInfomation);

  if (location.state === undefined) {
    history.push("/");
  }

  const picture = [
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1"
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

  const handleReviewSumbit = e => {
    console.dir(e.target.parentElement.parentElement.children[0]);
  };
  //메인 함수
  function floor() {
    const floors = document.getElementsByClassName("floor");
    if (floors[0].style.display === "flex") {
      floors[0].style.display = "none";
      floors[1].style.display = "none";
    } else {
      floors[0].style.display = "flex";
      floors[0].style.alignItems = "center";
      floors[0].style.justifyContent = "center";
      floors[1].style.display = "block";
    }
  }

  return (
    <Container>
      <Header></Header>
      <div style={{ backgroundColor: "white", display: "flex" }}>
        {/* 평면도 펼치는 아이콘 */}
        <Floor onClick={floor}>
          <FloorIco></FloorIco>
        </Floor>

        <FloorPlan />

        <CFlexComponent style={{ width: "70%", marginTop: "20px" }}>
          {/* picture에 사진url 배열을 넣어주세요 */}
          <Picture picture={picture}></Picture>
          <InformationComponent>
            <h3>방정보</h3>
            <RoomInfo>
              <div>주소</div>
              <div>
                {RoomInfomation !== undefined && RoomInfomation.address}
              </div>
              <div>통학거리</div>
              <div>
                {RoomInfomation !== undefined && RoomInfomation.distance}m
              </div>
              <div>건물형태</div>
              <div>원룸</div>
              <div>가격</div>
              <div>
                {RoomInfomation !== undefined && RoomInfomation.month}만원/
                {RoomInfomation !== undefined && RoomInfomation.deposit}만원
              </div>
              <div>면적</div>
              <div>{RoomInfomation !== undefined && RoomInfomation.scale}</div>
              <div>관리비</div>
              <div>
                {RoomInfomation !== undefined && RoomInfomation.adminExpenses}
              </div>
              <div>층수</div>
              <div>{RoomInfomation !== undefined && RoomInfomation.floor}</div>
            </RoomInfo>
          </InformationComponent>
          <InformationComponent>
            <h3>옵션</h3>
            <div className="icon">
              <OptionIcon
                visible={true}
                src={airconditioner}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={
                  RoomInfomation !== undefined && RoomInfomation.autoDoor
                }
                src={autoDoor}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={RoomInfomation !== undefined && RoomInfomation.cctv}
                src={cctv}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={
                  RoomInfomation !== undefined && RoomInfomation.elevator
                }
                src={elevator}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={
                  RoomInfomation !== undefined && RoomInfomation.gasrange
                }
                src={gasrange}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={RoomInfomation !== undefined && RoomInfomation.park}
                src={park}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={
                  RoomInfomation !== undefined && RoomInfomation.refrigerator
                }
                src={refrigerator}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={true}
                src={washingMachine}
                alt=""
              ></OptionIcon>
            </div>
          </InformationComponent>
          <InformationComponent>
            <h3>주변시설</h3>
            <div className="icon">
              <OptionIcon
                visible={
                  RoomInfomation !== undefined && RoomInfomation.subwayStation
                }
                src={subway}
                alt=""
              ></OptionIcon>
              <OptionIcon
                visible={
                  RoomInfomation !== undefined && RoomInfomation.busStation
                }
                src={bus}
                alt=""
              ></OptionIcon>
            </div>
          </InformationComponent>
          <InformationComponent>
            <h3>상세설명</h3>
            <p>{RoomInfomation !== undefined && RoomInfomation.description}</p>
          </InformationComponent>

          <InformationComponent>
            <h3>위치정보</h3>

            {/* 지도 넣기 */}
          </InformationComponent>

          <InformationComponent>
            <h3>리뷰</h3>
            <ReviewComponent>
              <FlexComponent>
                <CFlexComponent>
                  <input placeholder="리뷰제목을 입력하세요"></input>

                  <input placeholder="리뷰를 작성하세요"></input>
                </CFlexComponent>
                <ChattingIco onClick={handleReviewSumbit}></ChattingIco>
              </FlexComponent>
            </ReviewComponent>
            <ReviewScroll>
              <ReviewComponent>
                <h3>{/*리뷰제목 */}</h3>
                <h5>{/*리뷰글 */}</h5>
              </ReviewComponent>
              <ReviewComponent>
                <h3>{/*리뷰제목 */}</h3>
                <h5>{/*리뷰글 */}</h5>
              </ReviewComponent>
            </ReviewScroll>
          </InformationComponent>
        </CFlexComponent>

        {/* 오른쪽 판매자 정보창 */}
        <right>
          <RightBar>
            <ButtonBar>
              <FlexComponent style={{ justifyContent: "space-around" }}>
                <Button>
                  <AlertIco></AlertIco>
                </Button>
                <Button>
                  {RoomInfomation !== undefined && RoomInfomation.grade}
                </Button>
                <Button>
                  <HeartIco></HeartIco>
                </Button>
              </FlexComponent>
            </ButtonBar>
            <CFlexComponent>
              <FlexContainer
                style={{
                  height: "100px",

                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
              >
                {/* 사람 아이콘  */}
                <PersonIco></PersonIco>
                <h2>
                  {RoomInfomation !== undefined && RoomInfomation.sellerid}
                </h2>
                <ChattingIco></ChattingIco>
              </FlexContainer>
            </CFlexComponent>
          </RightBar>
        </right>
      </div>
    </Container>
  );
}

export default withRouter(Detail);
