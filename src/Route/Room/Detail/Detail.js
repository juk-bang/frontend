import React, { useState, useRef } from "react";

import styled, { css, keyframes } from "styled-components";

import elevator from "img/elevator.png";
import subway from "img/subway.png";
import bus from "img/bus.png";
import cctv from "img/cctv.png";
import airconditioner from "img/airconditioner.png";
import autoDoor from "img/autoDoor.png";

import gasrange from "img/gasrange.png";
import park from "img/park.png";
import washingMachine from "img/washingMachine.png";
import refrigerator from "img/refrigerator.png"

import { IoIosHeart, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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

export const PictureBoxComponent = styled.div`
  height: 300px;
  width: 70%;
  margin: 0 5px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
`;

export const ButtonComponent = css`
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  color: whitesmoke;

  font-size: 50px;
  cursor: pointer;

  position: absolute;
  z-index: 10;
  top: 50%;
`;

const checkDirection = direction => {
  if (direction === "forward") {
    return css`
      left: 100%;
      transform: translate(-50px, -25px);
    `;
  } else if (direction === "back") {
    return css`
      transform: translateY(-25px);
    `;
  }
};

export const PictureButtonComponent = styled.div`
  ${ButtonComponent}
  ${({ direction }) => checkDirection(direction)}
  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`;

const moveIcon = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const PictureComponent = styled.div`
  height: 100%;

  ${({ length, current }) =>
    css`
      width: ${length * 100}%;
      transform: translateX(-${(100 * current) / length}%);
      img {
        height: 100%;
        width: ${100 / length}%;
      }
    `};
`;

function Picture({ picture }) {
  const [current, setCurrent] = useState(0);
  const length = picture.length;
  console.log(current);

  return (
    <PictureBoxComponent>
      <PictureButtonComponent
        direction="back"
        visible={current === 0 ? false : true}
        onClick={() => {
          if (current !== 0) setCurrent(current - 1);
        }}
      >
        <IoIosArrowBack></IoIosArrowBack>
      </PictureButtonComponent>
      <PictureComponent current={current} length={length}>
        {picture.map((p, index) => (
          <img src={p} alt=""></img>
        ))}
      </PictureComponent>
      <PictureButtonComponent
        direction="forward"
        visible={current === length - 1 ? false : true}
        onClick={() => {
          if (current !== length - 1) setCurrent(current + 1);
        }}
      >
        <IoIosArrowForward></IoIosArrowForward>
      </PictureButtonComponent>
    </PictureBoxComponent>
  );
}


function Detail(props) {
  const { location, history, match } = props;

  if (location.state === undefined) {
    history.push("/");
  }

  const picture = [
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
    "https://ic.zigbang.com/ic/items/19432793/3.jpg?w=800&h=600&q=70&a=1",
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
          {/* picture에 사진url 배열을 넣어주세요 */}
          <Picture picture={picture}></Picture>
          <InformationComponent>
            <h3>방정보</h3>
            <RoomInfo>
              <div>주소</div>
              <div>{/*address */}</div>
              <div>통학거리</div>
              <div>{/*distance*/}m</div>
              <div>건물형태</div>
              <div>{/*structure*/}</div>
              <div>가격</div>
              <div>{/*price.deposit*/}만원/{/*price.month*/}만원</div>
              <div>면적</div>
              <div>{/*scale*/}</div>
              <div>관리비</div>
              <div>{/*adminExpenses*/}</div>
              <div>층수</div>
              <div>{/*floor*/}</div>
            </RoomInfo>
          </InformationComponent>
          <InformationComponent>
            <h3>옵션</h3>
            <div className="icon">
              <img src={airconditioner} alt=""></img>
              <img src={autoDoor} alt=""></img>
              <img src={cctv} alt=""></img>
              <img src={elevator} alt=""></img>
              <img src={gasrange} alt=""></img>
              <img src={park} alt=""></img>
              <img src={refrigerator} alt=""></img>
              <img src={washingMachine} alt=""></img>
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
              {/* description*/}
            </p>
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
                <ChattingButton>
                  <AiFillWechat></AiFillWechat>
                </ChattingButton>
              </FlexComponent>
            </ReviewComponent>
            <ReviewScroll>
              <ReviewComponent>
                <h3>{/*리뷰제목 */}</h3>
                <h5>{/*리뷰글 */}</h5>
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
                  <Button>{/*grade */}</Button>
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
                  <h2>{/*sellerid*/}</h2>
                </CFlexComponent>
                <ChattingButton>
                  <AiFillWechat></AiFillWechat>
                </ChattingButton>
              </FlexComponent>
   
            </CFlexComponent>
          </RightBar>
        </right>
      </div>
    </>
  );
}

export default Detail;
