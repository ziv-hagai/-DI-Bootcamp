import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import { searchRobots } from './redux/reducers';

import 'tachyons';

const rootReducers = combineReducers({ searchRobots })
const store = createStore(rootReducers);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

