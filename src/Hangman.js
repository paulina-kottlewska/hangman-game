import "./Hangman.css";
import hangmanAttempts from "./hangman-attempts.json";

function Hangman({ incorrectlyGuessed }) {

    // Selects the image corresponding to the number of incorrect guesses made
    const img = hangmanAttempts.find(img => img.attempt === incorrectlyGuessed);

    return (
        <div className="img-container">
            {img ? (
                <img src={img.src} alt={img.alt} className="img-hangman"></img>
            ) : (
                <p className="message">Image not found</p>
            )}
        </div>
    )
}

export default Hangman;