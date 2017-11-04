import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import state from './State/Reducers';
import { loadTodos, saveTodos } from './Utils/LocalStorage';

const persistedTodos = loadTodos();
const store = createStore(
  state,
  persistedTodos
);

store.subscribe(() => {
  saveTodos(store.getState().todos);
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
