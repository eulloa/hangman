import { DECREMENT_GUESSES, LETTER_GUESS_MADE } from '../actions/actionTypes';

const guesses = (state = 7, action) => {
    switch (action.type) {
        case DECREMENT_GUESSES:
            return state - 1;
        case LETTER_GUESS_MADE:
            return action.letter;
        default:
            return state;
    }
}

export default guesses;