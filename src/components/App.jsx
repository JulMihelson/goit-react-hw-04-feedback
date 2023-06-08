import React from 'react';
import { Notification } from './Notification';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import css from './Reviews.module.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotal = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPercents = () => {
    const total = this.countTotal();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalReviews = this.countTotal();
    const positivePercentage = this.countPercents();
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
            onLeaveFeedback={this.handleLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics of feedbacks">
          {totalReviews > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalReviews={totalReviews}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
