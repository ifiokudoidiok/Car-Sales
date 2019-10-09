import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


const monsterReducer = combineReducers({
    car: reducers.carReducer,
    additionalPrice: reducers.additionalPriceReducer,
    store: reducers.storeReducer,
});

const store = createStore(
    monsterReducer,
)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App /> 
    </Provider>,
    rootElement);
