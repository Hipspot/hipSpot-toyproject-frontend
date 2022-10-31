import { selectorFamily } from "recoil";
import todoListAtom from "./todoListAtom";

/**
 * @example
 * const todos = useRecoilValue(todosWithTagsAndDate([["개발", "디자인"], "2022-10-04", "2022-10-05"]))
 * console.log(todos) // [ todo1, todo2, ... ]
 */
const todosWithTagsAndDate = selectorFamily({
  key: "todosWithTagsAndDate",
  get:
    ([tags, from, to]) =>
    ({ get }) => {
      if (!tags.length) return [];

      const todoList = get(todoListAtom);
      const todosWithTags = [];
      const todos = [];

      const parsedFrom = Date.parse(from);
      const parsedTo = Date.parse(to);

      todoList.forEach((todo) => {
        if (todo.tag.some((item) => tags.includes(item))) {
          todosWithTags.push(todo);
        }
      });

      todosWithTags.forEach((todo) => {
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

export default todosWithTagsAndDate;
