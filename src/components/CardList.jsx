import styled from "styled-components";

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: scroll;
  padding: 0 16px;
`;

export const Todo = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  background-color: white;
  box-shadow: 0px 4px 16px 0px #0000000a;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  cursor: pointer;

  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  h1 {
    font-family: "Apple SD Gothic Neo";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #1a1a1a;
  }

  .tag {
    padding: 4px 8px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 4px;

    font-family: "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.color};
  }

  .date {
    margin-top: 4px;
    font-family: "Apple SD Gothic Neo";
    font-weight: 400;
    font-size: 12px;
    color: #999999;
  }

  .right {
    cursor: pointer;
  }
`;
