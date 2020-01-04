import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";


export const Color = {
  deepPink: "#fd9bbb",
  mint: "#4de0c2",
  green: "rgba(198, 248, 198, 0.692)"
};

export const boxShadow = css`
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.12),
    0 18px 36px -18px rgba(0, 0, 0, 0.1);
`;

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

const container = css`
  width: 100%;
  ${margin};
  ${padding};
`;
export const Container = styled.div`
  ${container}
`;

export const FlexContainer = styled.div`
  ${container}
  display : flex;
`;
export const CFlexContainer = styled.div`
  ${container}
  display : flex;
  flex-direction: column;
`;

export const Board = styled.div`
  width: 70%;
  padding: 25px;
  margin: 0 auto;
  font-size: 1rem;

  ${width};
  ${margin};
  ${padding};
`;

const RecCss = css`
  text-decoration: none;
  min-width: fit-content;
  padding: 5px;
  font-size: 1.2rem;
  height: max-content;
  cursor: pointer;
  position: relative;
  top: -0.5rem;
  ${margin};
`;

const RadiusButtonCss = css`
  ${RecCss};
  padding: 5px 8px;
  border-radius: 10px;
`;

export const Buttoncss = css`
  color: white;
  background-color: pink;
  border: 2px solid;
  :hover {
    color: pink;
    background-color: white;
    border: 2px solid pink;
  }
  ${RecCss};
  ${({ radius }) => radius === "radius" && RadiusButtonCss}
  ${({ color }) => css`
    background-color: ${color};

    &:hover {
      color: ${color};
      background-color: white;
      border: 2px solid ${color};
    }
  `}
`;

export const Button = styled.button`
  ${Buttoncss}
`;

export const SmallButton = styled.a`
  ${Buttoncss}
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
