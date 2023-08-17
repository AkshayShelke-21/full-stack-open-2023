import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;

  return (
    all > 0 ? (<div>
      <h1>Statistics</h1>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>All : {all}</p>
      <p>Average : {(good * 1 + neutral * 0 + bad * -1) / all}</p>
      <p>Positive : {(good / all) * 100} %</p>
    </div>) : 
    <p>No feedback given.</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let all = 0;
  
  const handleGoodClick = () => {
    setGood(good + 1);
    all = all + 1;
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    all = all + 1;
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    all = all + 1;
  };

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </div>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  );
};

export default App;
