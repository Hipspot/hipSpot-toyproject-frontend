import { selectorFamily } from "recoil";
import todoListAtom from "./todoListAtom";

/**
 * @description
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
    ({ get }) =>
      get(todoListAtom).filter((todo) => tags.includes(todo.tag)),
});

export default todosWithTags;
