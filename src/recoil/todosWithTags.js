import { selectorFamily } from "recoil";
import todoListAtom from "./todoListAtom";

/**
 * @description
 * - 빈 배열 입력 시 전체 투두리스트 반환 (tag가 없는 todo 포함)
 * - 여러 태그 입력 시 그중 하나라도 포함하는 모든 todo 반환
 *
 * @example
 * const [tags, setTags] = useState([]);
 * const getTodosWithTags = useRecoilValue(todosWithTags(tags));
 * console.log(getTodosWithTags) // [ todo1, todo2, ... ]
 */
const todosWithTags = selectorFamily({
  key: "todosWithTags",
  get:
    (tags) =>
    ({ get }) => {
      const todoList = get(todoListAtom);
      if (!tags.length) return todoList;

      const todos = [];

      todoList.forEach((todo) => {
        if (todo.tag.some((item) => tags.includes(item))) {
          todos.push(todo);
        }
      });

      return todos;
    },
});

export default todosWithTags;
