import axios from "axios";

export const createTodo = async (todo) =>
  (await axios.post("/todo", todo)).data;
export const getTodoList = async () => (await axios.get("/todo")).data;
export const editTodo = async (todo) =>
  (await axios.patch(`/todo/${todo.id}`, todo)).data;
export const toggleTodo = async (id) => (await axios.patch(`/todo/${id}`)).data;
export const deleteTodo = async (id) =>
  (await axios.delete(`/todo/${id}`)).data;
