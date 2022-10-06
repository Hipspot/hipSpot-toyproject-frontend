import axios from "axios";
import { useEffect, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import * as todoApi from "./apis/todo";
import GlobalStyle from "./GlobalStyle";

function App() {
  const [data, setData] = useState();

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

  const toggleTodo = async (id) => {
    await todoApi.toggleTodo({ id });
    await getTodoList();
  };

  const deleteTodo = async (id) => {
    await todoApi.deleteTodo({ id });
    await getTodoList();
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <RecoilRoot>
      <GlobalStyle />
      <div className="App">
        {data &&
          data.map((i) => (
            <div key={i.id}>
              <h1>{i.title}</h1>
              <p>{i.content}</p>
              <button onClick={() => toggleTodo(i.id)}>{i.status}</button>
              <button onClick={() => deleteTodo(i.id)}>삭제</button>
            </div>
          ))}
      </div>
      <button onClick={createTodo}>투두 추가</button>
    </RecoilRoot>
  );
}

export default App;
