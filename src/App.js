// import "./App.css";
// import { useState } from "react";
// import Header from "./components/Header";

// function App() {
//   const [number, setNumber] = useState(0);

//   return (
//     <div className="App">
//       <Header number={number < 5 ? 0 : number} />

//       <hr />

//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>Click</button>
//     </div>
//   );
// }

// export default App;

//useMemo
// import "./App.css";
// import { useState, useMemo } from "react";
// import Header from "./components/Header";

// function App() {
//   const [number, setNumber] = useState(0);
//   const [text, setText] = useState("");

//   const data = useMemo(() => {
//     return calculateObjects();
//   }, []);

//   return (
//     <div className="App">
//       <Header data={data} />

//       <hr />

//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>Click</button>

//       <br />
//       <br />
//       <input value={text} onChange={() => setText(target.value)} />
//     </div>
//   );
// }

// function calculateObjects() {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000; i++) {}
//   console.log("Calculating completed!");
//   return { name: "Asu" };
// }

// export default App;

//useCallback
import "./App.css";
import { useState, useMemo } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Header />

      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <br />
      <br />
      <input value={text} onChange={(target) => setText(target.value)} />
    </div>
  );
}

export default App;
