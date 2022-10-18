import { useSetRecoilState } from "recoil";
import { getTodoList } from "../apis/todo";
import todoListAtom from "../recoil/todoListAtom";

/**
 * @name useRefreshTodoList
 *
 * @description
 * `todoListAtom` 상태 새로고침 함수를 반환하는 hook입니다.
 *
 * @example
 * const refreshTodoList = useRefreshTodoList();
 */
export default function useRefreshTodoList() {
  const setTodoList = useSetRecoilState(todoListAtom);

  const refreshTodoList = async () => {
    const response = await getTodoList();
    setTodoList(response);
  };

  return refreshTodoList;
}
