//기본 react library
import React, { useState } from "react";
//Third party library
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import {
  Editor,
  EditorState,
  convertFromRaw,
  RichUtils,
  convertToRaw
} from "draft-js";
//Component
import Header from "Components/Header";
import { postCommunityPost } from "Components/Api";
import { Button } from "../../../Components/Style";

//css style
const styles = {
  //에디터 스타일
  editor: {
    backgroundColor: "#fffef7",
    border: "2px dashed pink",
    height: "300px",
    overflowY: "scroll",
    padding: "1.1rem",
    fontSize: "1.1rem",
    fontFamily: "'calibri', sans-serif",
    margintop: "2rem",
    marginBottom: "1rem"
  }
};

//styled-components
//컨테이너
const Container = styled.div``;
//타이틀 입력 공간
const TitleInput = styled.input`
  width: 70%;
`;
//에디터 컨테이너
const ContainerEditer = styled.div`
  margin-top: 30px;
`;
//form 받기
const PostForm = styled.form`
  width : 70%;
  margin : 0 auto;
  ${Button} {
    position : relative;
    left : 100%;
    transform : translateX(-100%);
  }
`;

//draft-js custom style
const styleMap = {
  //highlight
  HIGHLIGHT: {
    backgroundColor: "red"
  }
};

//메인 함수
const CommunityNew = ({
  //props
  match: {
    params: { univid }
  },
  history
}) => {
  let [TitleState, SetTitleState] = useState("");
  //draft-js state 초기화
  let [editorState, setEditorState] = useState(EditorState.createEmpty());

  //이벤트 핸들러
  //타이틀 입력 핸들러
  const handleChangeTitleInput = e => {
    SetTitleState(e.target.value);
  };
  //submit form 핸들러
  const handleSubmitForm = async e => {
    e.preventDefault();
    //body를 json으로 바꿈
    const content = convertToRaw(editorState.getCurrentContent());
    const body = JSON.stringify(content);
    await postCommunityPost(univid, TitleState, body);
    await history.push(`/community/${univid}`);
  };

  return (
    <Container>
      <Header />
      <PostForm onSubmit={handleSubmitForm}>
        <TitleInput  placeholder="제목을 입력하세요"value={TitleState} onChange={handleChangeTitleInput} />
        <ContainerEditer style={styles.editor}>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            placeholder="본문을 입력하세요"
            customStyleMap={styleMap}
          />
        </ContainerEditer>
        <Button type="submit">제출하기</Button>
      </PostForm>
    </Container>
  );
};

export default withRouter(CommunityNew);
