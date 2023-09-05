import "./App.css";

function GameOverContainer({gameOver, isCorrect, handlePlayAgain}) {
    return (
        <div className={`game-over-container ${gameOver ? "show" : "hide"}`}>
            <p className={`message ${isCorrect ? "correct" : "incorrect"}`}>
                {isCorrect ? "Correct! You've won!" : "Incorrect. Try again."}
            </p>
            <button className="play-again button-base" onClick={handlePlayAgain}>
                Play Again
            </button>
        </div>
    )
}

export default GameOverContainer;