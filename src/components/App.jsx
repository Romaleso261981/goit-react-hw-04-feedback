import { useState } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { WrapSection, SectionInfo, SectionWrap } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = Object.keys({good, neutral, bad});

  const total = good + neutral + bad;
  const percentage = total ? Math.round((good / total) * 100) : 0;

  const counterOfFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
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
