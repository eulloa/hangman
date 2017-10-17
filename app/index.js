import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
require('./css/index.css');

import store from './store';
import { Provider } from 'react-redux';

const connectedApp = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(connectedApp, document.getElementById('app'));