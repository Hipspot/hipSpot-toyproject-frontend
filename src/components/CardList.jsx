import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: scroll;
  padding: 0 16px;
`;

export const Card = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  background-color: white;
  box-shadow: 0px 4px 16px 0px #0000000a;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;

  .left input {
    accent-color: #e44269;
    border: 1px solid #e6e6e6;
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }

  .right {
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
    padding: 0 4px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9fbfd;
    border-radius: 4px;

    font-family: "Apple SD Gothic Neo";
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #06adc4;
  }
`;
