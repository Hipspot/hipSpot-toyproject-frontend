import { selectorFamily } from "recoil";
import todoListAtom from "./todoListAtom";

/**
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
      if (!tags.length) return [];

      const todoList = get(todoListAtom);
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
