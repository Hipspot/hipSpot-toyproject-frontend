import data from "./data";
let n = 7;

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

export const editTodo = (req, res, ctx) => {
  if (!req.body.hasOwnProperty("id")) return;
  const id = parseInt(req.params.id);
  const target = data.find((todo) => todo.id === id);
  if (!target) return res(ctx.status(404));
  target.title = req.body.title;
  target.content = req.body.content;
  target.tag = req.body.tag;
  return res(ctx.status(200), ctx.json(data));
};

export const toggleTodo = (req, res, ctx) => {
  if (req.body.hasOwnProperty("id")) return;
  const id = parseInt(req.params.id);
  const target = data.find((todo) => todo.id === id);
  if (!target) return res(ctx.status(404));
  if (target.status === "todo") target.status = "done";
  else target.status = "todo";
  return res(ctx.status(200), ctx.json(data));
};

export const deleteTodo = (req, res, ctx) => {
  const id = parseInt(req.params.id);
  const targetIndex = data.findIndex((todo) => todo.id === id);
  if (targetIndex === -1) return res(ctx.status(404));
  data.splice(targetIndex, 1);
  return res(ctx.status(200), ctx.json(data));
};
