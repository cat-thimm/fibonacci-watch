import styled from "styled-components";

const Field = styled.div<{ red: boolean; green: boolean; blue: boolean }>`
  background-color: ${({ red, green, blue }) =>
    red ? "red" : green ? "green" : blue ? "blue" : "white"};
`;

export const FirstField = styled(Field)`
  width: 100px;
  height: 100px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const SecondField = styled(Field)`
  width: 100px;
  height: 98px;
  border-bottom: 2px solid black;
`;

export const ThirdField = styled(Field)`
  border: 2px solid black;

  width: 200px;
  height: 200px;
`;

export const ForthField = styled(Field)`
  width: 302px;
  height: 298px;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
`;

export const FifthField = styled(Field)`
  width: 500px;
  height: 500px;
  border: 2px solid black;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
