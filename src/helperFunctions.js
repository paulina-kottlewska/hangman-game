// Returns random word.
function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)]
  }

// Checks if all the letters from random word are included in the guessed letters.
function isTheSame(randomWord, guessedLetters) {
  const randomWordArray = randomWord.split('');
  return randomWordArray.every(letter => guessedLetters.includes(letter));
}

export {getRandomWord, isTheSame};