import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: scroll;
  padding: 0 16px;
`;
