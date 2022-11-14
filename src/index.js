import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import { worker } from "./mocks";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  axios.defaults.baseURL = "https://hipspot-todo.endless-creation.com";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </RecoilRoot>
);
