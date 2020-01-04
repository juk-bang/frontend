import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

//공통색상
export const Color = {
  deepPink: "#fd9bbb",
  mint: "#4de0c2",
  green: "rgba(198, 248, 198, 0.692)"
};

//그림자
export const boxShadow = css`
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.12),
    0 18px 36px -18px rgba(0, 0, 0, 0.1);
`;
//margin주기
const margin = css`

    ${({ m }) =>
      css`
        margin: ${m};
      `}
    ${({ ml }) =>
      css`
        margin-left: ${ml};
      `}
    ${({ mr }) =>
      css`
        margin-right: ${mr};
      `}
    ${({ mt }) =>
      css`
        margin-top: ${mt};
      `}
    ${({ mb }) =>
      css`
        margin-bottom: ${mb};
      `}
`;

//패딩주기
const padding = css`

    ${({ p }) =>
      css`
        padding: ${p};
      `}
    ${({ pl }) =>
      css`
        padding-left: ${pl};
      `}
    ${({ pr }) =>
      css`
        padding-right: ${pr};
      `}
    ${({ pt }) =>
      css`
        padding-top: ${pt};
      `}
    ${({ pb }) =>
      css`
        padding-bottom: ${pb};
      `}
   
`;

const width = css`
  ${({ width }) =>
    css`
      width: ${width};
    `}
`;

const height = css`
  ${({ height }) =>
    css`
      width: ${height};
    `}
`;

const container = css`
  width: 100%;
  height : fit-content;
  ${width};
  ${height};
  ${margin};
  ${padding};
`;


export const Container = styled.div`
 content : "";
  ${container}
`;

/*flex content 기준점 위치설정 */
const jcenter = css`
  ${({jcenter})=>
    jcenter&&css`
      justify-content : center;
    `
  }
`

const acenter = css`
  ${({acenter})=>
    acenter&&css`
      align-items: center;
    `
  }
`

const astart= css`
  ${({astart})=>
    astart&&css`
      align-items: flex-start;
    `
  }
`

const aend = css`
  ${({aend})=>
    aend&&css`
      align-items: flex-end;
    `
  }
`

const jstart= css`
  ${({jstart})=>
    jstart&&css`
      justify-content: flex-start;
    `
  }
`

const jend = css`
  ${({jend})=>
    jend&&css`
     justify-content: flex-end;
    `
  }
`

export const flex = css`
  display:flex;
  ${container}
  ${acenter};
  ${jcenter};
  ${astart};
  ${aend};
  ${jstart};
  ${jend};
`
/*flex속성을 가지는 컨테이너, props로 flex-start, flex-end속성주기 가능 */
export const FlexContainer = styled.div`
  ${flex};
`

/*flex속성(direction이 column)을 가지는 컨테이너, props로 flex-start, flex-end속성주기 가능 */
export const CFlexContainer = styled.div`
  ${flex};
  flex-direction : column;
`;
/*padding이 있으며 text가 가운데 정렬이 되는 컨테이너 */
export const Board = styled.div`
  width: 70%;
  padding: 25px;
  margin: 0 auto;
  font-size: 1rem;

  ${width};
  ${height}
  ${margin};
  ${padding};
`;

const recButton = css`
  text-decoration: none;
  min-width: fit-content;
  padding: 5px;
  font-size: 1.2rem;
  height: max-content;
  cursor: pointer;
  ${padding};
  ${margin};
`;

const radiusButton= css`
  ${recButton};
  padding: 5px 8px;
  border-radius: 10px;
`;

export const button = css`

  color : white;
  background-color: pink;
  border: 2px solid;

  :hover {
    color: pink;
    background-color: white;
    border: 2px solid pink;
  }

  ${recButton};

  /*radius를 props로 전달하면 둥근 버튼이 형성 */
  ${({ radius }) => radius === "radius" && radiusButton}

  /* 버튼의 색상(color), 배경색 지정가능(backgroundColor) */
  ${({ color, backgroundColor }) => css`
    color: ${color};
    background-color :${backgroundColor};
    &:hover {
      color: ${backgroundColor};
      background-color: ${color};
      border: 2px solid ${backgroundColor};
    }
  `}
    /*폰트 크기 설정 */
    ${({fontSize}) => css`
      font-size : ${fontSize};
    `}
`;



/*일반적 사각형 버튼(기본 색상 : 핑크) */
export const Button = styled.button`
  ${button}
`;
/*일반적 작은 사각형 버튼(기본 색상 : 핑크) */
export const SmallButton = styled.button`
  ${button}
  font-size : 0.8rem;
  padding: 0px 5px;
`;


export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    font-family: "나눔고딕", "Helvetica Neue", sans-serif;
  }

  html {
   font-size: 13px; 
  }


 @media (max-width: 800px) {
   html {
    font-size: 10px;
    }
}
/**
* Rangeslider
*/
.rangeslider {
  margin: 20px 0;
  position: relative;
  background: #e6e6e6;
  -ms-touch-action: none;
  touch-action: none;
}
.rangeslider,
.rangeslider .rangeslider__fill {
  display: block;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
}
.rangeslider .rangeslider__handle {
  background: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);
}
.rangeslider .rangeslider__handle .rangeslider__active {
  opacity: 1;
}
.rangeslider .rangeslider__handle-tooltip {
  width: 30px;
  height: 40px;
  text-align: center;
  position: absolute;
  background-color: pink;
  font-weight: normal;
  font-size: 14px;
  transition: all 100ms ease-in;
  border-radius: 4px;
  display: inline-block;
  color: white;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}
.rangeslider .rangeslider__handle-tooltip span {
  margin-top: 12px;
  display: inline-block;
  line-height: 100%;
}
.rangeslider .rangeslider__handle-tooltip:after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
}
/**
* Rangeslider - Horizontal slider
*/
.rangeslider-horizontal {
  margin-left : 10px;
  height: 8px;
  width : 70%;
  border-radius: 10px;
}
.rangeslider-horizontal .rangeslider__fill {
  height: 100%;
  background-color: pink;
  border-radius: 10px;
  top: 0;
}
.rangeslider-horizontal .rangeslider__handle {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.rangeslider-horizontal .rangeslider__handle:after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 6px;
  left: 6px;
  border-radius: 50%;
  background-color: #dadada;
 
}
.rangeslider-horizontal .rangeslider__handle-tooltip {
  top: -55px;
}
.rangeslider-horizontal .rangeslider__handle-tooltip:after {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid pink;
  left: 50%;
  bottom: -8px;
  transform: translate3d(-50%, 0, 0);
}

/**
* Rangeslider - Labels
*/
.rangeslider__labels {
  position: relative;
}
.rangeslider-vertical .rangeslider__labels {
  position: relative;
  list-style-type: none;
  margin: 0 0 0 24px;
  padding: 0;
  text-align: left;
  width: 250px;
  height: 100%;
  left: 10px;
}
.rangeslider-vertical .rangeslider__labels .rangeslider__label-item {
  position: absolute;
  transform: translate3d(0, -50%, 0);
}
.rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {
  content: '';
  width: 10px;
  height: 2px;
  background: black;
  position: absolute;
  left: -14px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
}
.rangeslider__labels .rangeslider__label-item {
  position: absolute;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  top: 10px;
  transform: translate3d(-50%, 0, 0);
}

div.DraftEditor-root {
    width: 100%;
    font-family: 'calibri', sans-serif;
  }

div.DraftEditor-editorContainer {
}
`;
