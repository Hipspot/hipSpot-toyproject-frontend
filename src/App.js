import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  atomFamily,
} from "recoil";
import styled from "styled-components";
import { Card, CardList } from "./components/CardList";
import Logo from "./components/Logo";
import { Tag, TagList } from "./components/TagList";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Logo>TODO LIST</Logo>
      <Calendar></Calendar>
      <Section>
        <TagList>
          <Tag>#기획</Tag>
          <Tag>#디자인</Tag>
          <Tag>#개발</Tag>
          <Tag>#FE</Tag>
          <Tag>#BE</Tag>
          <Tag>#iOS</Tag>
          <Tag>#AOS</Tag>
        </TagList>
        <CardList>
          <Card>
            <div className="left">
              <input type="checkbox" />
            </div>
            <div className="right">
              <h1>힙스팟 기획</h1>
              <div className="tag">#기획</div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <input type="checkbox" />
            </div>
            <div className="right">
              <h1>힙스팟 기획</h1>
              <div className="tag">#기획</div>
            </div>
          </Card>
          <Card>
            <div className="left">
              <input type="checkbox" />
            </div>
            <div className="right">
              <h1>힙스팟 기획</h1>
              <div className="tag">#기획</div>
            </div>
          </Card>
        </CardList>
      </Section>
      <ActionButton>+</ActionButton>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Calendar = styled.div`
  height: 402px;
  width: 100%;
  background-color: gray;
`;

const Section = styled.section`
  width: 100%;
  flex: 1;
  background: #fcfcfc;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 16px;
`;

const ActionButton = styled.button`
  position: fixed;
  bottom: 8px;
  right: 16px;
  width: 48px;
  height: 48px;
  background-color: #f06587;
  color: white;
  font-size: 40px;
  padding: 0;
  border-radius: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #d0113f29;
`;
