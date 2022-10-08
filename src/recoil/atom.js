import { atom } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

export default todoListState;
