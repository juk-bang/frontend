//Reactjs Library
import React, { useEffect, useState } from "react";
//ThirdParty Library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import {
  Editor,
  EditorState,
  convertFromRaw,
  RichUtils,
  convertToRaw
} from "draft-js";
//Components
import { getCommunityPost } from "Components/Api";
import Header from "Components/Header";

//styled-Components
const Container = styled.div``;

//draft-js custom style
const styleMap = {
  //highlight
  HIGHLIGHT: {
    backgroundColor: "red"
  }
};

//메인함수
const CommunityDetail = ({
  match: {
    params: { univid, postid }
  }
}) => {
  //state초기화
  let [editorState, SetEditorState] = useState(EditorState.createEmpty());
  let [MainState, SetMainState] = useState({
    id: "",
    writer: "",
    title: "",
    body: "",
    previd: "",
    nextid: ""
  });

  //Post를 가져오는 함수
  const GetPost = async () => {
    let Post = await getCommunityPost(univid, postid);
    Post = Post.data;
    //state초기화
    SetMainState({
      id: Post.id,
      previd: Post.previd,
      nextid: Post.nextid,
      title: Post.title,
      writer: Post.writer,
      body: Post.body
    });
    MainState.id = Post.id;
    MainState.previd = Post.previd;
    MainState.nextid = Post.nextid;
    MainState.title = Post.title;
    MainState.writer = Post.writer;
    MainState.body = Post.body;

    //draft.js인코딩
    if (MainState.body !== "") {
      const parseBody = JSON.parse(MainState.body);
      const RawParseBody = convertFromRaw(parseBody);
      const StateParseBody = EditorState.createWithContent(RawParseBody);
      SetEditorState(StateParseBody);
      editorState = StateParseBody;
    }
  };

  //초기화 함수
  useEffect(() => {
    GetPost();
    console.log(MainState);
  }, []);

  //리턴함수
  return (
    <Container>
      <Header />
      {MainState.title}
      <Editor editorState={editorState} customStyleMap={styleMap} />
    </Container>
  );
};

export default withRouter(CommunityDetail);
