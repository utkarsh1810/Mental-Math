import React, { Component } from 'react';
import '../App.css';
import Score from './Score';
import Game from './Game';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
 
  state = {
    correctAnswer: 0,
    numQuestions: 0,
  };

  
  handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currState => ({
        correctAnswer: currState.correctAnswer + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };

  resetQuiz = event => {
    this.setState({
      numQuestions : 0,
      correctAnswer : 0
    })  
  }
    

  render() {
    return (
      <div className="App">
        <Header />
        <div className="game">
          <h2>Start Quiz</h2>
          <Game handleAnswer={this.handleAnswer} />
          <br/>
          <Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions} /> 
          <button name="Reset" onClick={this.resetQuiz}>
          Reset
          </button> 
          <Footer />
          
        </div>
      </div>
    );
  }
}

export default App;
