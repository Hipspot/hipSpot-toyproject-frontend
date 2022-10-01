import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <div className="App"></div>
    </RecoilRoot>
  );
}

export default App;
