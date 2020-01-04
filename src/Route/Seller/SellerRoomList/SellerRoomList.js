//Reactjs Library
import React from "react";
//ThirdParty Library
import styled from "styled-components";
//Components
import Header from "Components/Header";
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

const Container = styled.div``;

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
      <RoomDistanceComponent>{distance}</RoomDistanceComponent>
      <RoomAreaComponent>
        {scale}m<sup>2</sup>/{floor}층
      </RoomAreaComponent>
      <img src={Heart} alt="heart"></img>
    </RoomItemComponent>
  );
}

const SellerRoomList = () => {
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
    </>
  );
};

export default SellerRoomList;
