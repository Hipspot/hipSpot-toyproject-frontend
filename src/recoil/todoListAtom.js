import { atom, selector } from "recoil";
import { getTodoList } from "../apis/todo";

const todoListAtom = atom({
  key: "todoListAtom",
  default: selector({
    key: "todoListAtom/default",
    get: () => getTodoList(),
  }),
});

export default todoListAtom;
