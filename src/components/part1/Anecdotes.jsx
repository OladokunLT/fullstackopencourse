import React, { useState } from "react";

const Anecdotes = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(8).fill(0));
  // const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const [largestVotes, setLargestVotes] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleVotes = () => {
    let uptdatedVotes = [...votes];
    uptdatedVotes[selected] += 1;
    setVotes(uptdatedVotes);

    let updatedLargestVotes = uptdatedVotes.indexOf(Math.max(...uptdatedVotes));
    setLargestVotes(updatedLargestVotes);
  };

  const handleNextAnecdote = () => {
    let randomNo = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNo);
  };
  return (
    <div>
      <h2>Anecdotes of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdotes</button>

      <h2>Anecdotes with the largest votes</h2>
      <p>{anecdotes[largestVotes]}</p>
      <p>has {votes[largestVotes]} votes</p>
    </div>
  );
};

export default Anecdotes;
