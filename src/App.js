import React from 'react';
import Section from './components/Section';
import Statistic from './components/Statistic';
import FeedbackOptions from './components/FeedbackOptions';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = (value) => () => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  // countPositiveFeedbackPercentage = (percent) => () => {
  //   Math.round((good / totalFeedback) * 100);
  // }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const options = Object.keys(this.state);
    const countPositiveFeedbackPercentage = Math.round(
      (good / totalFeedback) * 100,
    );

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.increment}
          ></FeedbackOptions>
        </Section>

        {totalFeedback > 0 ? (
          <Section title={'Statistics'}>
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <div>Noooob!</div>
        )}
      </div>
    );
  }
}

export default App;
