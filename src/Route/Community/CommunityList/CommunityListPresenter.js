//Reactjs Library
import React, { useEffect, useState, useContext } from "react";
//ThirdParty Library
import { withRouter, Link } from "react-router-dom";
//Components
import Header from "Components/Header";
import { getCommunityList } from "Components/Api";
//style
import { BoardList, BoardTitle, GotoDetail } from "./Style";
import { Button, Board, Color } from "Components/Style";

//메인 함수
const ListPresenter = ({
  match: {
    params: { univid }
  }
}) => {
  //state초기화
  //List = 게시글 리스트
  const [List, setList] = useState({
    List: ""
  });

  //리스트를 Api에서 불러오는 함수
  const getList = async () => {
    const postsList = await getCommunityList(univid);
    const { data } = postsList;
    setList({ List: data });
    List.List = data;
  };

  //리스트를 api에서 처음 랜더할때 부름
  useEffect(() => {
    getList();
  }, []);

  //리스트가 null인지 판단
  let stateNull = true;
  if (List.List !== "") {
    stateNull = false;
  }

  //리턴
  return (
    <div>
      <Header />
      <Board>
        {localStorage.getItem("LoggedIn") == "true" ? (
          <>
            <Link color={Color.mint} to={`/community/${univid}/new`}>
              글쓰기
            </Link>
          </>
        ) : (
          ""
        )}

        <BoardList>
          <BoardTitle>제목</BoardTitle>
          <BoardTitle>작성자</BoardTitle>
          <BoardTitle>작성일</BoardTitle>
          <BoardTitle>조회수</BoardTitle>
          {stateNull
            ? ""
            : List.List.map((list, index) => (
                <>
                  <GotoDetail
                    href={`/community/detail/${list.univid}/${list.id}`}
                  >
                    {list.title}
                  </GotoDetail>
                  <div>{list.writer}</div>
                  <div>{list.modifiedDate.slice(0, 10)}</div>
                  <div>{list.views}</div>
                </>
              ))}
        </BoardList>
      </Board>
    </div>
  );
};

export default withRouter(ListPresenter);
