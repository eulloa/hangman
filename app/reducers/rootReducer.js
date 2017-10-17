import { combineReducers } from 'redux';

import guesses from './guesses';

const rootReducer = combineReducers({
    guesses
});

export default rootReducer;