import { selectorFamily } from "recoil";
import todoListAtom from "./todoListAtom";

/**
 * @example
 * const [num, setNum] = useState(0);
 * const getTodo = useRecoilValue(todoWithId(num));
 * console.log(getTodo) // {id: 0, title: "Todo title 1", ... }
 */
const todoWithId = selectorFamily({
  key: "todoWithId",
  get:
    (id) =>
    ({ get }) => {
      const todoList = get(todoListAtom);
      const target = todoList.find((todo) => todo.id === id);
      if (!target) return {};
      return target;
    },
});

export default todoWithId;
