import alphabetButtons from "./alphabet.json";
import "./Hangman.css";

function AlphabetButtons({guessedLetters, handleGuessedLetter}) {

    const getButtonClass = (letter) => {
        return guessedLetters.includes(letter) ? "button line-through" : "button";
    }

    const alphabetButton = alphabetButtons.map((letter) => (
        <button 
            className={getButtonClass(letter)} 
            key={letter} 
            onClick={() => handleGuessedLetter(letter)}
            disabled={guessedLetters.includes(letter)}>
            {letter}
        </button>
    ))
    return (
        <div className="buttons-container">
            {alphabetButton}
        </div>
    )
}

export default AlphabetButtons;