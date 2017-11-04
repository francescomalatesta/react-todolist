import React, { Component } from 'react';

import TodoList from './Container/TodoList';
import AddTodoItemWidget from './Container/AddTodoItemWidget';
import TodosVisibilityChooser from './Container/TodosVisibilityChooser';
import ResetTodoItemsWidget from './Container/ResetTodoItemsWidget';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My First React ToDo List</h1>
        <hr />
        <TodoList />
        <hr />
        <AddTodoItemWidget />
        <hr />
        <TodosVisibilityChooser />
        <hr />
        <ResetTodoItemsWidget />
      </div>
    );
  }
}

export default App;
