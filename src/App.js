import React, { Component } from 'react';

import TodoList from './Container/TodoList';
import AddTodoItemWidget from './Container/AddTodoItemWidget';
import ResetTodoItemsWidget from './Container/ResetTodoItemsWidget';

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <hr />
        <AddTodoItemWidget />
        <hr />
        <ResetTodoItemsWidget />
      </div>
    );
  }
}

export default App;
