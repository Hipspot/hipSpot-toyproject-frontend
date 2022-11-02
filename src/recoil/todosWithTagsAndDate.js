import { selectorFamily } from "recoil";
import todoListAtom from "./todoListAtom";

/**
 * @description
 * 입력 배열의 첫째 요소: tags = [tag1, tag2, ...]
 * - 빈 배열 입력 시 전체 투두리스트 반환 (tag가 없는 todo 포함)
 * - 여러 태그 입력 시 그중 하나라도 포함하는 모든 todo 반환
 *
 * @example
 * const todos = useRecoilValue(todosWithTagsAndDate([["개발", "디자인"], "2022-10-04", "2022-10-05"]))
 * console.log(todos) // [ todo1, todo2, ... ]
 */
const todosWithTagsAndDate = selectorFamily({
  key: "todosWithTagsAndDate",
  get:
    ([tags, from, to]) =>
    ({ get }) => {
      const todoList = get(todoListAtom);
      if (!tags.length) return todoList;

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
