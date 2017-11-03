const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          title: action.payload.title,
          is_done: 0
        }
      ];
    case 'RESET_TODOS':
      return [];
    default:
      return state;
  }
};

export default todos;
