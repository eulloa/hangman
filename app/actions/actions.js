import { DECREMENT_GUESSES, LETTER_GUESS_MADE, SET_WORD_TO_GUESS } from './actionTypes';

export let decrementGuesses = () => {
    return {
        type: DECREMENT_GUESSES
    }
}

/**
 * Player clicks a letter in the Keyboard component
 * @param {Char} letter 
 */
export let letterGuessMade = (letter) => {
    return {
        type: LETTER_GUESS_MADE,
        letter
    }
}

/**
 * Board element will dynamically set the word player needs to guess when it mounts to the DOM
 * @param {String} word 
 */
export let wordToGuess = (word) => {
    return {
        type: SET_WORD_TO_GUESS,
        word
    }
}