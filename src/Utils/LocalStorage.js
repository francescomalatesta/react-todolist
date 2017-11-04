export const loadTodos = () => {
  try {
    const serializedTodos = localStorage.getItem('todos');
    if(serializedTodos === null) {
      return {
        todos: []
      };
    }

    return {
      todos: JSON.parse(serializedTodos)
    };
  } catch (error) {
    return {
      todos: []
    };
  }
};

export const saveTodos = (items) => {
  try {
    const serializedItems = JSON.stringify(items);
    localStorage.setItem('todos', serializedItems);
  } catch (err) {
    console.log('something went wrong');
    // ignoring stuff here.
  }
};
