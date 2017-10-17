import React from 'react';

import Header from './header';
import WordArranger from './wordArranger';
import Keyboard from './keyboard';

import Words from '../data/words';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: []
        }
    }

    //max & min inclusive
    getRandomWord = () => {
        let min = 0;
        let max = Words.length - 1;
        let randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        return Words[randomIndex];
    }

    componentDidMount() {
        let word = this.getRandomWord().word.split('');

        this.setState({
            word
        })
    }

    setWordToGuess = (word) => {

    }

    guessLetter = (button) => {
        console.log(button.type);
    }
    
    render() {
        return (
            <div className="board">
                <Header guesses={this.props.guesses} />
                <WordArranger word={this.state.word} />
                <Keyboard {...this.props} />
            </div>
        );
    }
}

export default Board;