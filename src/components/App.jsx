import { useState, useEffect } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { WrapSection, SectionInfo, SectionWrap } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const options = ["good", "neutral", "bad"];

  useEffect(() => setTotal(total => total = good + neutral + bad), [bad, good, neutral, total]);
console.log(good / total);

  useEffect(() => setPercentage(percentage => percentage = Math.round((good / total) * 100)),[good, total])

  const counterOfFeedback = option => {
    switch (option) {
      case "good":
        setGood(prevGood => prevGood + 1);
        break;
      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case "bad":
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <WrapSection>
      <SectionWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onBtnClick={counterOfFeedback} />
        </Section>
      </SectionWrap>
      <SectionInfo>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage + '%'}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </SectionInfo>
    </WrapSection>
  );
};

export default App;

