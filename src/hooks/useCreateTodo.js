import { useSetRecoilState } from "recoil";
import { createTodo as createTodoApi } from "../apis/todo";
import todoListAtom from "../recoil/todoListAtom";

/**
 * @name useCreateTodo
 *
 * @description
 * Todo 추가 함수를 반환하는 hook입니다.
 * Todo 추가 함수는 서버에 추가 요청 이후 'todoListAtom' 상태를 새로고침합니다.
 *
 * @example
 * const createTodo = useCreateTodo();
 * createTodo("투두제목", "투두내용", ["기획", "디자인"])
 */
export default function useCreateTodo() {
  const setTodoList = useSetRecoilState(todoListAtom);

  const createTodo = async (title, content, tag) => {
    const response = await createTodoApi({
      title,
      content,
      modifiedDate: new Date().toISOString(),
      isComplete: "todo",
      tag,
    });
    setTodoList(response);
  };

  return createTodo;
}
