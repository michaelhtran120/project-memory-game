import React from "react";

const Score = ({ score, bestScore }) => {
  return (
    <div className='score-board' id='score-board'>
      <div className='current-score' id='current-score'>
        <p>Current Score: {score} </p>
      </div>
      <div className='best-score' id='best-score'>
        <p>Best Score: {bestScore} </p>
      </div>
    </div>
  );
};

export default Score;
