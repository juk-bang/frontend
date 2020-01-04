import styled, { css } from "styled-components";
export const RoomListComponent = styled.div`
  ${({ height }) =>
    css`
      height: calc(${height}px - 8.6rem)};
    `}
  overflow-y: scroll;
  background-color: pink;
`;

export default RoomListComponent;