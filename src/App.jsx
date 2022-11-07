import styled from "styled-components";
import { Card, CardList } from "./components/CardList";
import Logo from "./components/Logo";
import { Tag, TagList } from "./components/TagList";
import { tags } from "./constants/tag";
import GlobalStyle from "./GlobalStyle";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import { dateToLocalString } from "./utils/date";

function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  return (
    <Wrapper>
      <GlobalStyle />
      <Logo>TODO LIST</Logo>

      <Calendar>
        <DateRangePicker
          className="dateRangePicker"
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={1}
          direction="horizontal"
          showDateDisplay={false}
        />
      </Calendar>
      <Section style={{ position: "sticky", top: 0 }}>
        <TagList>
          {tags.map((tag) => (
            <Tag>{tag.name}</Tag>
          ))}
        </TagList>
      </Section>
      <Section>
        <CardList>
          {tags.map((tag) => (
            <Card color={tag.color} backgroundColor={tag.backgroundColor}>
              <div className="left">
                <input type="checkbox" />
              </div>
              <div className="right">
                <h1>힙스팟 기획</h1>
                <div className="tag">{tag.name}</div>
                <p>{dateToLocalString(new Date().toISOString())}</p>
              </div>
            </Card>
          ))}
        </CardList>
      </Section>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Calendar = styled.div`
  height: fit-content;
  width: 100%;
  background-color: gray;
  .rdrCalendarWrapper {
    width: 100vw;
    .rdrMonth {
      flex: 1;
    }
  }
  .rdrDefinedRangesWrapper {
    display: none;
  }

  /* 버튼 색상 바꿈 */
  .rdrNextPrevButton {
    background-color: #fef5f8;
  }
  .rdrNextButton i {
    border-color: transparent transparent transparent #e44269;
  }
  .rdrPprevButton i {
    border-color: transparent #e44269 transparent transparent;
  }
  /* 범위 색상 바꿈 */
  .rdrStartEdge,
  .rdrEndEdge {
    background-color: #e44269;
  }
  .rdrInRange {
    color: #fef5f8 !important;
  }
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span {
    color: white !important;
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
    color: #e44269 !important;
  }

  /* 현재날짜 밑줄 */
  .rdrDayToday .rdrDayNumber span:after {
    background-color: #e44269;
  }

  .CalendarDay__selcted {
    border-radius: 90%;
  }
`;

const Section = styled.section`
  width: 100%;
  flex: 1;
  overflow-x: scroll;
  background: #fcfcfc;
  padding-bottom: 16px;
`;
