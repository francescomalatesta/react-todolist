const visibility = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SHOW_DONE':
    case 'SHOW_UNDONE':
    case 'SHOW_ALL':
      return action.type;
    default:
      return state;
  }
}

export default visibility;
