import React, { useEffect, useState, useRef } from "react";
import { getRoomList } from "Components/Api";
import { withRouter } from "react-router-dom";

/*전역 네비게이션 바 */
import Header from "Components/Header";
/*서브 네비게이션 바 */
import Navigation from "./Navigation";
/* 필터 창 */
import MyFilter from "./Filter/MyFilter";
/*룸리스트 창*/
import Room from "./Room";

/*스타일 관련 라이브러리 */
import {RoomListComponent} from "../style";
import { Container, Board, FlexContainer} from "Components/Style";


const RoomListPresenter = ({
  match: {
    params: { univid }
  }
}) => {
  useEffect(() => {
    const checkError = async () => {
      await getRoomList(univid);
    };
    checkError();
  }, []);

  //필터창이 켜있는지 상태 저장
  const [filter, setFilter] = useState(false);
  const onFilter = () => {
    setFilter(!filter);
  };

  /*
    nav,roomlist => height를 조절하기 위한 변수 
    nav: 서브네비게이션바를 참조
    roomlist : RoomListComponent를 참조
  */
  const nav = useRef();
  const roomlist = useRef();

  //화면 크기 변경시마다 스크롤 화면 높이 변경
  useEffect(() => {
    const onResize = () => {
      const a = roomlist.current;
      const b = nav.current.offsetHeight;

      a.style.height = window.innerHeight - 2 * b + "px";
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Container style={{ height: "100vh", overflowY: "hidden" }}>
      <Header />
      <FlexContainer>
        <Board width="50%" p="0px">
          {/* 지도들어갈 자리 */}
        </Board>
        <Board width="50%" p="0px">
          <Navigation onFilter={onFilter} nav={nav}></Navigation>
          <RoomListComponent ref={roomlist} height={window.innerHeight}>
            {!filter && <Room></Room>}
            {filter && <MyFilter onFilter={onFilter}></MyFilter>}
          </RoomListComponent>
        </Board>
      </FlexContainer>
    </Container>
  );
};

export default withRouter(RoomListPresenter);
