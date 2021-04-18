import React, { Component } from "react";
import FeedbackOptions from "./Components/Feadback/Feadback";
import Statistics from "./Components/Statistics/Statistics";
import Notification from "./Components/Notification/Notification";
import Section from "./Components/Section/Section";
import "./style.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedbackValue = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFbPercentage = () => {
    const percentage = Math.round(
      (this.state.good / (this.state.good + this.state.bad)) * 100
    );
    return percentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFb = this.countTotalFeedback();

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.changeFeedbackValue}
          />
        </Section>
        <Section title="Statistics">
          {totalFb === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFbPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
