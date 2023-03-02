import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <Header />
    </div>
  );
}

export default App;
