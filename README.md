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

| 종류          | 도메인 | uri             | method | body                               | response |
| ------------- | ------ | --------------- | ------ | ---------------------------------- | -------- |
| 투두목록 조회 | Todo   | /todo           | GET    | {tags:Tag[], start:Date, end:Date} | Todo[]   |
| 투두 추가     | Todo   | /todo           | POST   | Todo                               | Todo     |
| 투두 수정     | Todo   | /todo/:id       | PATCH  | Todo                               | Todo     |
| 투두 토글     | Todo   | /todo/toggle:id | PATCH  | null                               | Todo     |
| 투두 삭제     | Todo   | /todo/:id       | DELETE | null                               | null     |

### Response Type

```ts
type Todo = {
  id: number;
  title: string;
  content: string;
  modifiedDate: Date;
  isConplete: Boolean;
  tag: Tag[];
};

type Tag = "global" | "design" | "fe" | "be" | "mobile";
```

### WebView Commiunication Structure

```ts
type FlutterToWebView = {
  type: "createTodo" | "editTodo";
  data: any;
};

type WebViewToFlutter = {
   type: "openEditModal";
   data: any;
};

const createTodoData: FlutterToWebView = {
   type: "createTodo",
   data: {
      title: string,
      content: string,
      tag: Tag[],
   }
}

const editTodoData: FlutterToWebView = {
   type: "editTodo",
   data: {
      id: 1,
      title: "마라탕먹기",
      content: "맛있다",
      tag: "fe",
   }
}

const openEditModalData: WebViewToFlutter = {
   type: "openEditModal",
   data: {
      id: 2,
      title: "마라탕먹기",
      content: "맛있겠다",
      tag: "fe",
   }
}
```

## Member

<table>
  <tr align="center">
    <td>황인서</td>
    <td>오승태</td>
    <td>이효린</td>
  </tr>
  <tr>
     <td align="center">
        <a href="https://github.com/sjsjsj1246"><img src="https://avatars.githubusercontent.com/u/24623403?v=4" width="150px" alt="이효린"/><br /></a>
     </td>
     <td align="center">
        <a href="https://github.com/yeoularu"><img src="https://avatars.githubusercontent.com/u/69510981?v=4" width="150px" alt="황인서"/><br /></a>
     </td>
     <td align="center">
        <a href="https://github.com/hyorish03"><img src="https://avatars.githubusercontent.com/u/108210492?v=4" width="150px" alt="황인서"/><br /></a>
     </td>
  <tr>
</table>
