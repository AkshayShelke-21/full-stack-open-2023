/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ value, text }) => {
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>;
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const average = (good-bad/all);
  const positive = `${(good/all)} %`

  return all > 0 ? (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="All" value={all} />
          <StatisticsLine
            text="Average"
            value={average}
          />
          <StatisticsLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  ) : (
    <p>No feedback given.</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = (state, setState) => () => setState(state + 1);

  return (
    <div>
      <Button onClick={increment(good, setGood)} text="Good" />
      <Button onClick={increment(neutral, setNeutral)} text="Neutral" />
      <Button onClick={increment(bad, setBad)} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
