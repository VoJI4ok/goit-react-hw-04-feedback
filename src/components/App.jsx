import  { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedBackOptions/FeedBackOptions';
import Notification from './Notifications/Notifications';
import Section from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const options = ['good', 'neutral', 'bad'];


const onLeaveFeedback = e => {
  const name = e.target.name;
  switch (name) {
    case 'bad':
      setBad(bad => bad + 1);
      break;
    case 'neutral':
      setNeutral(neutral => neutral + 1);
      break;
    case 'good':
      setGood(good => good + 1);
      break;
    default:
      return;
  }
};

const countTotalFeedback = () => {
return good + neutral + bad
};
const countPositiveFeedbackPercentage = () => {
  return Math.round((good / countTotalFeedback()) * 100) || 0;
};

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          key={options}
          options = {options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
