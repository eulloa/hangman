import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

const defaultState = {
    guesses: 7,
    wordToGuess: ''
}

export default createStore(
    rootReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)