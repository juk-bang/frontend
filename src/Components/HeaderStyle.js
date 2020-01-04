//Third party app
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
//Picture
import logo from "img/titleIcon.png";
import { Color } from "./Style";

//style components
export const Logo = styled(Link)`
  width: 10rem;
  height: 4rem;

  background-image: url(${logo});
  background-size: contain;

  margin-top: 0.4rem;

  ${({ src }) =>
    src &&
    css`
      background-image: url(${src});
    `}

  background-repeat: no-repeat;
`;

export const NavItem = styled(Link)`
  font-size: 1.2rem;
  line-height: 1.9rem;
  text-decoration: none;
  min-width: max-content;

  color: ${Color.mint};

  padding: 1.2rem;

  ${({ color }) =>
    css`
      color: ${color};
    `}
  & + & {
    margin-left: 10px;
  }

  &:active {
    transform: translate(5px, 5px);
    transition: 1s;
  }
`;

export const LeftNav = styled.div`
  padding-left: 1rem;
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

export const RightNav = styled.div`
  padding-right: 0.8rem;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-left: 0.8rem;
`;

export const NavigationBar = styled.nav`
  z-index: 99;
  background-color : White;
  width: 100%;
  height: 4.3rem;
  display: flex;
  position: fixed;

  line-height: 1.8rem;
  border-bottom: 0.25px solid rgba(0, 0, 0, 0.5);

  font-weight: bold;
  margin-top : 0;
  ${NavItem}:hover {
    color: #185fb7;
    border-bottom: 1px solid #00f500;
  }
`;

export const NavBlank = styled.div`
  height: 4.3rem;
  content: " ";
`;

export const SubNavigationComponent = styled.nav`
  width: 50%;
  height: 4.3rem;
  display: flex;
  position: fixed;
  right: 0px;
  line-height: 1.8rem;

  background-color: rgba(2, 3, 2, 0.6);

  font-weight: bold;
  ${NavItem}:hover {
    color: pink;
    border-bottom: 1px solid pink;
  }
`;
