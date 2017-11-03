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
