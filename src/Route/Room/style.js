import styled, { css } from "styled-components";
import { Link } from "styled-icons/material";
import { Color } from "../../Components/Style";

export const RoomListComponent = styled.div`
  ${({ height }) =>
    css`
      height: calc(${height}px - 8.6rem)};
    `}
  overflow-y: scroll;
  background-color: pink;
`;

/*필터 관련 스타일 함수 */
export const FilterComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  user-select: none;
`;

export const FilterContainer = styled.div`
  margin-top: 1.5rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
`;

export const FilterItem = styled.div`
  font-weight: 800;
  margin-bottom: 0.7rem;
`;

export const FilterSelectItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterOptionItem = styled.div`
  border-radius: 20px;
  border: 1px solid pink;
  background-color: white;
  min-width: fit-content;
  padding-top: 3px;
  padding: 4px 8px;
  cursor: pointer;
  & + & {
    margin-left: 0.5rem;
  }
  :hover {
    background-color: pink;
    color: white;
  }
`;

export const SelectComponent = styled.select`
  border: 1px solid pink;
  width: 100px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  height: 26px;
`;

export const CheckBox = styled.input`
  display: none;

  + label {
    display: inline-block;
    width: max-content;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 1.3rem;
  }

  + label:before {
    display: inline-block;
    content: "";
    width: 1.3rem;
    height: 1.3rem;
    background-color: pink;
    border-radius: 2px;
    margin-right: 5px;
  }

  &:checked {
    + label:before {
      content: "\u2713";
      color: white;
      text-align: center;
    }
  }
`;

/*룸리스트 관련 스타일 함수 */
const RoomList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: pink;
  width : 100%;
`;

export const RoomDistanceComponent = styled.h3`
  margin-top: 0.8rem;
  margin-bottom: 0.6rem;
  color: #669699;

  font-weight: 800;
  font-size: 1.2rem;

  ::before {
    font-size: 1rem;
    content: "숭실대까지 ";
    color: #2c2c2c;
  }
`;

export const BoxComponent = styled.h5`
  font-weight: 900;
  color: black;
  padding: 0.2rem;
  border-radius: 30%;
  background: ${Color.mint};
  background-size: auto;
  display: inline;
  & + & {
    margin-left: 0.3rem;
  }
`;

export const RoomMoneyComponent = styled.ul`
  list-style: none;
  font-weight: 700;
  font-size: 1.3rem;

  padding: 0;

  display: flex;
  margin: 6px 0px;
  margin-right: 10px;

  li {
    color: rosybrown;
    &:hover {
      color: white;
    }
  }

  li:nth-child(3n + 1) {
    color: black;
  }
`;

export const RoomAreaComponent = styled.p`
  font-size: 0.9rem;
  color: gray;
  font-weight: 700;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const RoomItemComponent = styled(Link)`
  margin: 10px;
  text-decoration: none;
  background-color: white;
  display: inline-block;
  font-weight: 300;
  padding: 0.5rem;
  height: fit-content;

  border-radius: 5px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);

  &:hover {
    background: rgb(150, 135, 135);
    ${RoomMoneyComponent} li {
      color: white;
    }
    ${RoomDistanceComponent} {
      color: #1ddb16;
    }
  }

  img:first-child {
    width: 100%;
  }

  img:last-child {
    width: 2rem;
    position: relative;
    left: 75%;
  }
`;