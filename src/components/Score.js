import React from 'react';


const Score = props => {
  return (
    <div className="text">
      <span>Your Score:</span>
      <br/>
      <p> {props.numCorrect}/{props.numQuestions} </p>
    </div>
  );
};

export default Score;
