import styled from "styled-components";
import {
  getTagBackgroundColor,
  getTagColor,
  tagToLocaleString,
} from "../constants/tag";
import { Checkbox, CheckboxChecked, Dots } from "../assets/svg";
import { dateToLocalString } from "../utils/date";
import useToggleTodo from "../hooks/useToggleTodo";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTodo = useToggleTodo();
  const deleteTodo = useDeleteTodo();

  return (
    <Wrapper
      key={todo.id}
      color={getTagColor(todo.tag)}
      backgroundColor={getTagBackgroundColor(todo.tag)}
      onClick={() => toggleTodo(todo.id)}
    >
      <div className="left">
        {todo.isComplete ? <CheckboxChecked /> : <Checkbox />}
      </div>
      <div className="middle">
        <h1>{todo.title}</h1>
        <div className="tag">#{tagToLocaleString(todo.tag)}</div>
        <p className="date">{dateToLocalString(new Date(todo.modifiedDate))}</p>
      </div>
      <div className="right">
        <Dots
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        />
        {menuOpen && (
          <div className="menu">
            <div>수정</div>
            <div
              onClick={() => {
                deleteTodo(todo.id);
                setMenuOpen(false);
              }}
            >
              삭제
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
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

    .menu {
      position: absolute;
      background-color: white;
      right: 23px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      font-family: "Apple SD Gothic Neo";
      font-weight: 400;
      font-size: 14px;
      display: flex;
      flex-direction: column;

      div {
        padding: 4px 8px;
      }

      div + div {
        padding-top: 4px;
        border-top: 1px solid #e5e5e5;
      }
    }
  }
`;
