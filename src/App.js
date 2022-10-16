import { useState } from "react";
import { useRecoilValue } from "recoil";
import todoListAtom from "./recoil/todoListAtom";
import GlobalStyle from "./GlobalStyle";
import useRefreshTodoList from "./hooks/useRefreshTodoList";
import useCreateTodo from "./hooks/useCreateTodo";
import useEditTodo from "./hooks/useEditTodo";
import useToggleTodo from "./hooks/useToggleTodo";
import useDeLeteTodo from "./hooks/useDeleteTodo";
import todoWithId from "./recoil/todoWithId";
import todosWithTags from "./recoil/todosWithTags";
import todosWithDate from "./recoil/todosWithData";

function App() {
  const data = useRecoilValue(todoListAtom);
  const [num, setNum] = useState(0);
  const getTodo = useRecoilValue(todoWithId(num));
  const [tags, setTags] = useState([]);
  const getTodosWithTags = useRecoilValue(todosWithTags(tags));
  const getTodosWithDate = useRecoilValue(
    todosWithDate(["2022-10-04", "2022-10-25"])
  );
  console.log(getTodo);

  const refreshTodoList = useRefreshTodoList();

  const createTodo = useCreateTodo();

  const editTodo = useEditTodo();

  const toggleTodo = useToggleTodo();

  const deleteTodo = useDeLeteTodo();

  return (
    <>
      <GlobalStyle />
      <div className="App">
        {data &&
          data.map((i) => (
            <div key={i.id}>
              <h1>{i.title}</h1>
              <p>{i.content}</p>
              <p>{i.tag}</p>

              <button onClick={() => toggleTodo(i.id)}>{i.status}</button>
              <button onClick={() => deleteTodo(i.id)}>삭제</button>
              <button
                onClick={() =>
                  editTodo(i.id, "edit title", "edit content", ["FE", "BE"])
                }
              >
                수정
              </button>
            </div>
          ))}
      </div>

      <button
        onClick={() =>
          createTodo("new todo title", "new todo content", ["개발", "FE"])
        }
      >
        투두 추가
      </button>

      <button onClick={refreshTodoList}>투두리스트 새로고침</button>
      <p>selector todoWithId: {getTodo.title}</p>
      <button onClick={() => setNum(num + 1)}>todoWithId id++</button>
      <p>
        selector todosWithTags: {getTodosWithTags.map((todo) => todo.title)}
      </p>
      <button onClick={() => setTags(["개발"])}>todosWithTags "개발"</button>
      <button onClick={() => setTags(["FE", "개발"])}>
        todosWithTags "FE", "개발"
      </button>
      {getTodosWithDate.map((todo) => todo.title)}
    </>
  );
}

export default App;
