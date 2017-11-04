export const addTodo = title => {
  return {
    type: 'ADD_TODO',
    payload: {
      title: title
    }
  };
}

export const resetTodos = () => {
  return {
    type: 'RESET_TODOS',
    payload: {}
  }
}

export const deleteToDo = index => {
  return {
    type: 'DELETE_TODO',
    payload: {
      index: index
    }
  }
};

export const toggleToDo = index => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      index: index
    }
  }
};
