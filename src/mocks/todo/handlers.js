import { rest } from "msw";
import * as service from "./service";

export const todoHandlers = [
  rest.post("/todo", service.createTodo),
  rest.get("/todo", service.getTodoList),
  //TODO
  // rest.get("/todo/:id", service.getTodo),
  // rest.patch("/todo/:id", service.editTodo),
  // rest.patch("/todo/:id", service.toggleTodo),
  // rest.delete("/todo/:id", service.deleteTodo),
];