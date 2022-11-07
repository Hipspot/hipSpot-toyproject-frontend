<p align="center"><img width='200px' src="https://user-images.githubusercontent.com/24623403/193721398-c6bb6f0d-859e-4601-9057-f063bfbb82f5.png"></p>
<p align='center'>
  <img src='https://img.shields.io/github/package-json/v/Endless-Creation-32nd/hipSpot-toyproject-frontend'>
  <a href="https://github.com/Endless-Creation-32nd/hipSpot-toyproject-frontend/issues"><img src='https://img.shields.io/github/issues/Endless-Creation-32nd/hipSpot-toyproject-frontend'></a>
 <a href="https://github.com/Endless-Creation-32nd/hipSpot-toyproject-frontend/graphs/contributors"><img src='https://img.shields.io/github/contributors/Endless-Creation-32nd/hipSpot-toyproject-frontend'></a>
 <a href='https://github.com/Endless-Creation-32nd/hipSpot-toyproject-frontend/blob/main/LICENSE'><img src='https://img.shields.io/github/license/Endless-Creation-32nd/hipSpot-toyproject-frontend'></a>
</p>

# TodoList 토이 프로젝트

Hipspot 프로젝트를 진행하기 전 팀원들과 간단히 협업해봅니다.

## Skills

- msw
- recoil
- axios
- styled-components

## Mocking Apis

| 종류          | 도메인 | uri       | method | body | response |
| ------------- | ------ | --------- | ------ | ---- | -------- |
| 투두목록 조회 | Todo   | /todo     | GET    | null | Todo[]   |
| 투두 추가     | Todo   | /todo     | POST   | Todo | Todo[]   |
| 투두 수정     | Todo   | /todo/:id | PATCH  | Todo | Todo[]   |
| 투두 토글     | Todo   | /todo/:id | PATCH  | null | Todo[]   |
| 투두 삭제     | Todo   | /todo/:id | DELETE | null | Todo[]   |

### Response Type

```ts
type Todo = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  status: "todo" | "done";
  tag: Tag[];
};

type Tag = "기획" | "디자인" | "FE" | "BE" | "Mobile";
```
