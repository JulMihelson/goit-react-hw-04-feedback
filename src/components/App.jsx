import React, { useState } from 'react';

import { Notification } from './Notification';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import css from './Reviews.module.css';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotal = () => {
    return Object.values(feedback).reduce((acc, item) => acc + item, 0);
  };

  const countPercents = () => {
    const total = countTotal();
    const { good } = feedback;
    return total ? Math.round((good / total) * 100) : 0;
  };

  const totalReviews = countTotal();
  const positivePercentage = countPercents();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
      className={css.counter}
    >
      <Section className={css.title} title="Please, leave your feedback">
        <FeedbackOptions
          onLeaveFeedback={handleLeaveFeedback}
          options={Object.keys(feedback)}
        />
      </Section>
      <Section title="Statistics of feedbacks">
        {totalReviews > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalReviews={totalReviews}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
