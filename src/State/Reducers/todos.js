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
    case 'TOGGLE_TODO':
      return state.map((item, index) => {
        if(action.payload.index === index) {
          return {
            title: item.title,
            is_done: (item.is_done === 0) ? 1 : 0
          };
        }

        return item;
      });
    case 'DELETE_TODO':
      return state.filter((item, index) => action.payload.index !== index);
    case 'RESET_TODOS':
      return [];
    default:
      return state;
  }
};

export default todos;
