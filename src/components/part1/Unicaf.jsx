import React, { useState } from "react";

const Statistics = ({ good, neutral, bad, average, percent, allClicks }) => {
  if (allClicks === 0) {
    return <p>No feeback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good:" value={good} />
        <StatisticLine text="Neutral:" value={neutral} />
        <StatisticLine text="Bad:" value={bad} />
        <StatisticLine text="All:" value={allClicks} />
        <StatisticLine text="Average:" value={average} />
        <StatisticLine text="Positive:" value={percent} />
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text} {props.value}
      </td>
    </tr>
  );
};

const Unicaf = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);
  const [average, setAverge] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setAllClicks(updatedGood + neutral + bad);

    const updatedAll = allClicks + 1;
    setAverge((updatedGood - bad) / updatedAll);
    setPercent((updatedGood / updatedAll) * 100);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setAllClicks(updatedNeutral + good + bad);

    const updatedAll = allClicks + 1;
    // setAverge( updatedAll);
    setPercent((good / updatedAll) * 100);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setAllClicks(updatedBad + neutral + good);

    const updatedAll = allClicks + 1;
    setAverge((good - updatedBad) / updatedAll);
    setPercent((good / updatedAll) * 100);
  };

  return (
    <>
      <div>
        <h2>give feedback</h2>
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />

        <h2>statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allClicks={allClicks}
          average={average.toFixed(1)}
          percent={percent.toFixed(1) + "%"}
        />
      </div>
    </>
  );
};

export default Unicaf;
