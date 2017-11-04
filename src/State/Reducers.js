import { combineReducers } from 'redux';

import todos from './Reducers/todos.js';
import visibility from './Reducers/visibility.js';

const state = combineReducers({
  todos,
  visibility
});

export default state;
