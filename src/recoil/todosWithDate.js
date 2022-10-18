import { selectorFamily } from "recoil";
import todoListAtom from "./todoListAtom";

/**
 * @example
 * const todos = useRecoilValue(todosWithDate(["2022-10-04", "2022-10-05"]))
 * console.log(todos) // [ todo1, todo2, ... ]
 */
const todosWithDate = selectorFamily({
  key: "todosWithDate",
  get:
    ([from, to]) =>
    ({ get }) => {
      const todoList = get(todoListAtom);
      const todos = [];

      const parsedFrom = Date.parse(from);
      const parsedTo = Date.parse(to);

      todoList.forEach((todo) => {
        const parsedCreatedAt = Date.parse(todo.created_at);

        if (
          parsedFrom <= parsedCreatedAt &&
          parsedCreatedAt < parsedTo + 86400000
        ) {
          todos.push(todo);
        }
      });

      return todos;
    },
});

export default todosWithDate;
