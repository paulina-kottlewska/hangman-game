import { useState, useEffect } from 'react';
import './App.css';
import words from './words.json';
import { getRandomWord, isTheSame } from './helperFunctions';

import StartPage from './StartPage';
import Hangman from './Hangman.js';
import AlphabetButtons from './AlphabetButtons';
import WordDisplay from './WordDisplay';
import GameOverContainer from './GameOverContainer';

import flowers from "./img/pngfind-colour.png";
import blackPen from "./img/ballpoint-pen-vector.png";
import pencil from "./img/pencil-eraser-grey.png";



function App() {

  const [startGame, setStartGame] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [randomWord, setRandomWord] = useState(getRandomWord(words));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectlyGuessed, setIncorrectlyGuessed] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  //Handles the game's condition. If there are 6 incorrect guesses, or if the word is guessed correctly, it triggers the end of the game.
  useEffect(() => {
    const hasMaxIncorrectGuesses = incorrectlyGuessed === 6;
    const hasGuessedWordCorrectly = isTheSame(randomWord, guessedLetters)

    if(hasMaxIncorrectGuesses || hasGuessedWordCorrectly) {
      setGameOver(true);
      setShowAnswer(true);
      setIsCorrect((hasGuessedWordCorrectly));
    }
  }, [incorrectlyGuessed, guessedLetters])

  // Initiates the game by resetting relevant state variables to their initial values and setting a new random word for the game.
  const handleStartGame = () => {
    setStartGame(false);
    setGameOver(false);
    setShowAnswer(false);
    setRandomWord(getRandomWord(words));
  }

  // Gets the clicked letter and adds it to the guessedLetters array.
  const handleGuessedLetter = (letter) => {
    setGuessedLetters(prevLetters => [...prevLetters, letter]);

    // If the random word doesn't include the guessed letter, increment the incorrectlyGuessed state by one
    if(!randomWord.includes(letter)) {
      setIncorrectlyGuessed(prevState => prevState + 1);
    }
  }

  //Resets the game to its initial state for another round of play. 
  const handlePlayAgain = () => {
    setRandomWord(getRandomWord(words));
    setGameOver(false);
    setGuessedLetters([]);
    setIncorrectlyGuessed(0);
    setShowAnswer(false);
  }

  return (
    <div className={`main-container ${startGame ? "main-container-start-page" : ""}`}>
    {
      startGame ?
      <StartPage handleStartGame={handleStartGame} flowers={flowers} blackPen={blackPen} pencil={pencil}/>
      :
      <>
        <div className={`left-column ${startGame ? "left-column-start-background" : ""}`}>
          <Hangman incorrectlyGuessed={incorrectlyGuessed}/>
          <img src={pencil} alt="yellow pencil and eraser" className="img-pencil-game"></img>
        </div>
        <div className="right-column">
          <WordDisplay randomWord={randomWord} guessedLetters={guessedLetters} revealWord={showAnswer} isCorrect={isCorrect}/>
          <GameOverContainer gameOver={gameOver} isCorrect={isCorrect} handlePlayAgain={handlePlayAgain}/>
          {!gameOver && <AlphabetButtons word={randomWord} guessedLetters={guessedLetters} handleGuessedLetter={handleGuessedLetter} /> }
          <img src={flowers} alt="doodled flowers" className="img-flowers-game"></img>
          <img src={blackPen} alt="black pen" className="img-black-pen-game"></img>
        </div>
      </>
    }
    </div>
  );
}

export default App;
