import styled from "styled-components";

export const TagList = styled.div`
  width: fit-content;
  height: 75px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  gap: 12px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const Tag = styled.div`
  white-space: nowrap;
  padding: 0 12px;
  height: 32px;
  border-radius: 20px;
  border: 1px solid #cccccc;
  font-family: "Apple SD Gothic Neo";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
