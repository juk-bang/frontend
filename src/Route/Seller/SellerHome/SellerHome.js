//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
import { Link } from "react-router-dom";
//Components
import Header from "Components/Header";
import SellerRoomList from "../SellerRoomList/SellerRoomList";
import {  Board, button } from "Components/Style";
import {Color} from "Components/Style"
import {
  RoomItemComponent,
  RoomMoneyComponent,
  BoxComponent,
  RoomDistanceComponent,
  RoomAreaComponent,
  RoomList
} from "../../Room/RoomList/Room";

import Heart from "img/heart.png";
import { Button, FlexContainer } from "../../../Components/Style";

//styled-Components

const LinkStyle = styled(Link)`
  ${button};
  background-color : green;
  color : white;

`;


const RoomListContainer = styled.div`
  display: grid;
  background-color: ${Color.green};
  width : 100%;
  height: 550px;


  padding: 15px;
  border-radius: 7px;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow-y: scroll;
  grid-row-gap: 20px;
  grid-column-gap: 10px;

  @media (min-height: 800px) {
    height: 700px;
  }
`
function RoomItem({
  id,
  thumbnail,
  structure,
  price,
  floor,
  scale,
  grade,
  distance
}) {
  const changePrice = price => {
    let hmillion = price / 10000;
    let tthousand = price % 10000;
    hmillion = Math.floor(hmillion);
    if (hmillion > 0) {
      return hmillion + "억" + tthousand;
    }
    return tthousand;
  };

  price.deposit = changePrice(price.deposit);

  return (
    <RoomItemComponent
      className="room"
      to={{
        pathname: `1/1`,
        state: {}
      }}
    >
      <img src={thumbnail} alt="thumbnailimage" />
      <RoomMoneyComponent>
        <li>월세</li>
        <li>
          {price.deposit}/{price.month}
        </li>
      </RoomMoneyComponent>
      <BoxComponent>{structure}</BoxComponent>
      <BoxComponent>*{grade}</BoxComponent>
      {/* <RoomDistanceComponent>{distance}</RoomDistanceComponent> */}
      <RoomAreaComponent>
        {scale}m<sup>2</sup>/{floor}층
      </RoomAreaComponent>
      <FlexContainer jcenter>
      <Button backgroundColor = "green">수정</Button>
      <Button backgroundColor = "green">삭제</Button>
      </FlexContainer>

    </RoomItemComponent>
  );
}

//메인함수
const Favorites = () => {
  const roomData = [
    {
      roomid: 1,
      thumbnail:
        "https://ic.zigbang.com/ic/items/19317951/1.jpg?w=800&h=600&q=70&a=1",
      structure: "원룸",
      price: {
        deposit: 100,
        month: 50,
        adminExpnse: 5
      },
      floor: 1,
      scale: "38",
      grade: 3,
      distance: "120m"
    },
    {
      roomid: 1,
      thumbnail:
        "https://ic.zigbang.com/ic/items/19317951/1.jpg?w=800&h=600&q=70&a=1",
      structure: "원룸",
      price: {
        deposit: 100,
        month: 50,
        adminExpnse: 5
      },
      floor: 1,
      scale: "38",
      grade: 3,
      distance: "120m"
    },
    {
      roomid: 1,
      thumbnail:
        "https://ic.zigbang.com/ic/items/19317951/1.jpg?w=800&h=600&q=70&a=1",
      structure: "원룸",
      price: {
        deposit: 100,
        month: 50,
        adminExpnse: 5
      },
      floor: 1,
      scale: "38",
      grade: 3,
      distance: "120m"
    },
    {
      roomid: 1,
      thumbnail:
        "https://ic.zigbang.com/ic/items/19317951/1.jpg?w=800&h=600&q=70&a=1",
      structure: "원룸",
      price: {
        deposit: 100,
        month: 50,
        adminExpnse: 5
      },
      floor: 1,
      scale: "38",
      grade: 3,
      distance: "120m"
    },
    {
      roomid: 1,
      thumbnail:
        "https://ic.zigbang.com/ic/items/19317951/1.jpg?w=800&h=600&q=70&a=1",
      structure: "원룸",
      price: {
        deposit: 100,
        month: 50,
        adminExpnse: 5
      },
      floor: 1,
      scale: "38",
      grade: 3,
      distance: "120m"
    }
  ];
  return (
    <>
      <Header />
      <Board width = "100%">
        
        <LinkStyle to={`/manager/newroom/${localStorage.getItem("userId")}`}>
          방 만들기
        </LinkStyle>
        <RoomListContainer>
      {roomData.map((room, index) => (
            <RoomItem
              key={room.id}
              id={room.id}
              thumbnail={room.thumbnail}
              structure={room.structure}
              price={room.price}
              floor={room.floor}
              scale={room.scale}
              grade={room.grade}
              distance={room.distance}
            ></RoomItem>
          ))}
      </RoomListContainer>
      </Board>
    </>
  );
};

export default Favorites;
