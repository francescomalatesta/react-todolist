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

export const showAllTodos = () => {
  return {
    type: 'SHOW_ALL',
    payload: {}
  }
};

export const showOnlyUndoneTodos = () => {
  return {
    type: 'SHOW_UNDONE',
    payload: {}
  }
};

export const showOnlyDoneTodos = () => {
  return {
    type: 'SHOW_DONE',
    payload: {}
  }
};
