import "./Hangman.css"

function WordDisplay({ randomWord, guessedLetters, revealWord, isCorrect }) {

    const getLetterClass = () => {
        if(revealWord) {
            return isCorrect ? "correct" : "incorrect";
        }
        return "";
    }

    // Renders the provided word, displaying guessed letters if present in the random word, or placeholders otherwise. 
    // Reveals the full word depending on the 'revealWord' condition
    const displayedLetters = randomWord.split('').map((letter, index) => {
        const showLetter = revealWord || guessedLetters.includes(letter);
        const letterClass = getLetterClass();

        return (
            <span className={`letter ${letterClass}`} key={index}>
                {showLetter ? letter : <span className="underscore">__</span>}
            </span>
        )
    });

    return (
        <div className="letters-container">
            {displayedLetters}
        </div>
    )
}

export default WordDisplay;