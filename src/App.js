import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Function to generate random number between 1 and 100
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && (
        <div>
          <h2>Random Number: {randomNumber}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

