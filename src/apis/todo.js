import axios from "axios";

export const createTodo = async (todo) =>
  (await axios.post("/todo", todo)).data;
export const getTodoList = async () => (await axios.get("/todo")).data;
