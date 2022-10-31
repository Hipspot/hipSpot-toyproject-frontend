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
        for (let i = 0; i < tags.length; i++) {
          if (!todo.tag.includes(tags[i])) return;
        }
        todos.push(todo);
      });

      return todos;
    },
});

export default todosWithTags;
