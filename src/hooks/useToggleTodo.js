import { useRecoilRefresher_UNSTABLE, useSetRecoilState } from "recoil";
import { toggleTodo as toggleTodoApi } from "../apis/todo";
import todoListAtom from "../recoil/todoListAtom";

/**
 * @name useToggleTodo
 *
 * @description
 * Todo.isComplete 토글 함수를 반환하는 hook입니다("todo" <-> "done").
 * Todo 토글 함수는 서버에 토글 요청 이후 'todoListAtom' 상태를 새로고침합니다.
 *
 * @example
 * const toggleTodo = useToggleTodo();
 * toggleTodo(2)
 */
export default function useToggleTodo() {
  const refresh = useRecoilRefresher_UNSTABLE(todoListAtom);
  const toggleTodo = async (id) => {
    await toggleTodoApi(id);
    refresh();
  };

  return toggleTodo;
}
