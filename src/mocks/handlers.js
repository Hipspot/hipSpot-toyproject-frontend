import { rest } from "msw";

export const handlers = [
  rest.get("/todo", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 0,
          title: "mock data 목 데이터 title 1",
          content: "mock data 목 데이터 content 1",
          created_at: "2022-10-03T20:30:12.345Z",
          status: "done",
          tag: ["개발", "FE"],
        },
        {
          id: 1,
          title: "22 mock data 목 데이터 title 2",
          content: "22 mock data 목 데이터 content 2",
          created_at: "2022-10-04T00:40:12.345Z",
          status: "doing",
          tag: ["기획", "디자인"],
        },
        {
          id: 2,
          title: "333 mock data 목 데이터 title 3",
          content: "333 mock data 목 데이터 content 3",
          created_at: "2022-10-05T11:00:12.345Z",
          status: "todo",
          tag: ["개발", "BE", "iOS", "AOS"],
        },
      ])
    );
  }),
];
