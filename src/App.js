import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import todoListState from "./recoil/atom";
import * as todoApi from "./apis/todo";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [data, setData] = useRecoilState(todoListState);
  const [datum, setDatum] = useState();
  const [count, setCount] = useState(0);

  const getTodoList = async () => {
    const response = await todoApi.getTodoList();
    setData(response);
  };

  const createTodo = async () => {
    await todoApi.createTodo({
      title: "title",
      content: "content",
      created_at: new Date().toISOString(),
      status: "todo",
      tag: ["개발", "FE"],
    });
    await getTodoList();
  };

  const getTodo = async (id) => {
    const response = await todoApi.getTodo(id);
    setDatum(response);
    await getTodoList();
  };

  const editTodo = async (id) => {
    const target = { ...data.find((todo) => todo.id === id) };
    target.title = `${id}번 투두의 수정한 제목`;
    target.content = `${id}번 투두의 수정한 내용`;
    await todoApi.editTodo(target);
    await getTodoList();
  };

  const toggleTodo = async (id) => {
    await todoApi.toggleTodo(id);
    await getTodoList();
  };

  const deleteTodo = async (id) => {
    await todoApi.deleteTodo(id);
    await getTodoList();
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        {data &&
          data.map((i) => (
            <div key={i.id}>
              <h1>{i.title}</h1>
              <p>{i.content}</p>
              <button onClick={() => toggleTodo(i.id)}>{i.status}</button>
              <button onClick={() => deleteTodo(i.id)}>삭제</button>
              <button onClick={() => editTodo(i.id)}>수정</button>
            </div>
          ))}
      </div>

      <button onClick={createTodo}>투두 추가</button>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => getTodo(count)}>{count}번 투두 가져오기</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        {datum ? (
          <div>
            <h1>{datum.title}</h1>
            <p>{datum.content}</p>
            <button onClick={() => toggleTodo(datum.id)}>{datum.status}</button>
            <button onClick={() => deleteTodo(datum.id)}>삭제</button>
            <button onClick={() => editTodo(datum.id)}>수정</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
