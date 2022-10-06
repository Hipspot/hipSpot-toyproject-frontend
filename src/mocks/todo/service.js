import data from "./data";
let n = 3;

export const createTodo = (req, res, ctx) => {
  data.push({
    id: n,
    title: req.body.title,
    content: req.body.content,
    created_at: req.body.created_at,
    status: req.body.status,
    tag: req.body.tag,
  });
  n++;
  return res(ctx.status(200), ctx.json(data));
};

export const getTodoList = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data));
};

export const getTodo = (req, res, ctx) => {};
export const editTodo = (req, res, ctx) => {};

export const toggleTodo = (req, res, ctx) => {
  const target = data.find((todo) => todo.id === req.body.id);
  if (target.status === "todo") target.status = "done";
  else target.status = "todo";
  return res(ctx.status(200), ctx.json(data));
};

export const deleteTodo = (req, res, ctx) => {
  const targetIndex = data.findIndex((todo) => todo.id === req.body.id);
  data.splice(targetIndex, 1);
  return res(ctx.status(200), ctx.json(data));
};
