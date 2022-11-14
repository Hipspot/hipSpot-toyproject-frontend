import { useRecoilRefresher_UNSTABLE, useRecoilState } from "recoil";
import { editTodo as editTodoApi } from "../apis/todo";
import todoListAtom from "../recoil/todoListAtom";

/**
 * @name useEditTodo
 *
 * @description
 * Todo 수정 함수를 반환하는 hook입니다.
 * Todo 수정 함수는 서버에 수정 요청 이후 'todoListAtom' 상태를 새로고침합니다.
 *
 * @example
 * const editTodo = useEditTodo();
 * editTodo(3, "투두제목", "투두내용", ["기획", "디자인"])
 */
export default function useEditTodo() {
  const todoList = useRecoilState(todoListAtom);

  const refresh = useRecoilRefresher_UNSTABLE(todoListAtom);

  const editTodo = async (id, title, content, tag) => {
    const target = await {
      ...todoList.find((todo) => todo.id === id),
      title,
      content,
      tag,
    };
    await editTodoApi(target);
    refresh();
  };

  return editTodo;
}
