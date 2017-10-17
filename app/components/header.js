import React from 'react';
import PropTypes from 'prop-types';

let Header = (props) => {
    return (
        <header>
            <h1>Guesses left: {props.guesses}</h1>
        </header>
    )
}

Header.propTypes = {
    guesses: PropTypes.number.isRequired
}

export default Header;