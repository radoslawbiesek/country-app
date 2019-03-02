import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <Router history = {hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);