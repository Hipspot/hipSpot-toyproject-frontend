import { useRecoilRefresher_UNSTABLE, useSetRecoilState } from "recoil";
import { deleteTodo as deleteTodoApi } from "../apis/todo";
import todoListAtom from "../recoil/todoListAtom";

/**
 * @name useDeleteTodo
 *
 * @description
 * Todo 삭제 함수를 반환하는 hook입니다.
 * Todo 삭제 함수는 서버에 삭제 요청 이후 'todoListAtom' 상태를 새로고침합니다.
 *
 * @example
 * const deleteTodo = useDeleteTodo();
 * deleteTodo(4)
 */
export default function useDeleteTodo() {
  const refresh = useRecoilRefresher_UNSTABLE(todoListAtom);

  const deleteTodo = async (id) => {
    await deleteTodoApi(id);
    refresh();
  };

  return deleteTodo;
}
