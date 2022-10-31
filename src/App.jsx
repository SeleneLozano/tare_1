import { useState } from "react";
import "./App.css";
import quotes from "./quotes.json";

function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changeQuote = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  };

  const colors = [
    "#AE96D4",
    "#E997CD",
    "#FF9DB3",
    "#FFB190",
    "#FFD273",
    "#F9F871"
  ];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;

  return (
    <div className="App" style={{ color: colors[randomColor] }}>
      <div className="card">
      <i className="fa-solid fa-quote-left"></i>
        <h1>
          {quotes[index].quote}
        </h1>
        <div>
          {quotes[index].author}
        </div>
        <button onClick={changeQuote} style={{ color: colors[randomColor] }}>
        <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default App;