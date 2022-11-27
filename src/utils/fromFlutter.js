import { createTodo, editTodo } from "../apis/todo";
import { createMessageDto, editMessageDto } from "../dto/fromFlutterMessage";

async function fromFlutter(message) {
  const { type = "", data = {} } = message;
  switch (type) {
    case "createTodo":
      const createTodoData = { ...createMessageDto, type, data };
      return await createTodo(createTodoData.data);
    case "editTodo":
      const editTodoData = { ...editMessageDto, type, data };
      return await editTodo(editTodoData.data);
    default:
      throw new Error(`메세지 타입을 확인해주세요 : ${type}`);
  }
}

export default fromFlutter;
