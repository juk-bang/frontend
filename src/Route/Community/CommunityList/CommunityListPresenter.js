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

const ListPresenter = ({
  match: {
    params: { univid }
  }
}) => {
  const [List, setList] = useState({
    List: ""
  });

  const getList = async () => {
    const postsList = await getCommunityList(univid);
    const { data } = postsList;
    setList({ List: data });
    List.List = data;
  };

  useEffect(() => {
    getList();
  }, []);

  let stateNull = true;
  if (List.List !== "") {
    stateNull = false;
  }

  return (
    <div>
      <Header />
      <Board>
        {localStorage.getItem("LoggedIn") == "true" ? (
          <>
            <Button color={Color.mint} to={`/community/${univid}/new`}>
              글쓰기
            </Button>
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
                  <GotoDetail href={`/detail/${list.univid}/${list.id}`}>
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
