import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import todos from './State/Reducers';
import { loadTodos, saveTodos } from './Utils/LocalStorage';

const persistedTodos = loadTodos();
const store = createStore(
  todos,
  persistedTodos
);

store.subscribe(() => {
  saveTodos(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
