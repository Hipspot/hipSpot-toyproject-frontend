import { useRecoilRefresher_UNSTABLE } from "recoil";
import todoListAtom from "../recoil/todoListAtom";

export default function useReFreshTodo() {
  const refresh = useRecoilRefresher_UNSTABLE(todoListAtom);
  return refresh;
}
