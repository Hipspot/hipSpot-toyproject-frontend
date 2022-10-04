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
export const toggleTodo = (req, res, ctx) => {};
export const deleteTodo = (req, res, ctx) => {};
