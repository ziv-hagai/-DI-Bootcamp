import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducer } from './redux/reducers';
import App from './App';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(

    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};


render();
store.subscribe(render);

