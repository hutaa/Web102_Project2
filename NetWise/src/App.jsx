import { useState } from 'react';
import './App.css';
import Flashcard from "./components/Flashcards";
import flashcards from "./data/data.js";
const App = () => {
  // const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [history, setHistory] = useState([0]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [numCards] = useState(flashcards.length)

  const nextCard = () => {
    // Step 1: If we’re not at the end of history, just go forward
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setFlipped(false);
      return;
    }
    // Step 2: Otherwise, generate a new random card (not same as current)
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * flashcards.length);
    } while (randomIndex === history[historyIndex]); 

    // Step 3: Add new card to history
    const newHistory = [...history.slice(0, historyIndex + 1), randomIndex];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setFlipped(false);
  };

  const prevCard = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setFlipped(false);
    }
  };

  const nextFromHistory = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setFlipped(false);
    }
  };
  
  return (
    <>
      <div className="App">
        <h1>NetWise</h1>
        <h3 style={{fontStyle: 'italic'}}>Build stronger networking fundamentals by testing your knowledge on the OSI Model.</h3>
        <p>Number of cards: {numCards}</p>
      </div>
      <Flashcard card={flashcards[history[historyIndex]]} flipped = {flipped} setFlipped = {setFlipped} />
      <div className = "card-btns">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </>
  )
}

export default App