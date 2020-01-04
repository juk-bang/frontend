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

//styled-Components
const Container = styled.div``;

const CommunityDetail = ({
  match: {
    params: { univid, postid }
  }
}) => {
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
    const {
      data: { id, previd, nextid, title, writer, body }
    } = await getCommunityPost(univid, postid);

    //state초기화
    SetMainState({
      id,
      previd,
      nextid,
      title,
      writer,
      body
    });

    //draft.js인코딩
    if (Post.body !== "") {
      const parseBody = JSON.parse(Post.body);
      const RawParseBody = convertFromRaw(parseBody);
      const StateParseBody = EditorState.createWithContent(RawParseBody);
      setEditorState(StateParseBody);
      editorState = StateParseBody;
    }
  };

  //초기화 함수
  useEffect(() => {
    GetPost();
  }, []);

  return <Container>hello</Container>;
};

export default withRouter(CommunityDetail);
