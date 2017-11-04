export const loadTodos = () => {
  try {
    const state = localStorage.getItem('todos');
    if(state === null) {
      return [];
    }

    return JSON.parse(state);
  } catch (error) {
    return [];
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
