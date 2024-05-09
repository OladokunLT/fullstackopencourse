// import { useState } from "react";
// import "./App.css";
// import Unicaf from "./components/part1/Unicaf";
// import Anecdotes from "./components/part1/Anecdotes";
// import Part1 from "./components/practices/Part1";

import Courseinfo from "./components/part1/Courseinfo";

// import Part2 from "./components/practices/Part2";
const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

function App() {
  return (
    <>
      {/* -------- note practise ------- */}
      {/* <Part1 /> */}
      {/* <Part2 notes={notes}> </Part2> */}

      {/* ------ Exercise 1d ------- */}
      <Courseinfo />
      {/* <Unicaf /> */}
      {/* <Anecdotes /> */}
    </>
  );
}

export default App;
