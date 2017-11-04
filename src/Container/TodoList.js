import { connect } from 'react-redux';

import List from '../Presentational/List';
import { deleteToDo } from '../State/Actions';
import { toggleToDo } from '../State/Actions';
import { loadTodos } from '../State/Actions';

const getVisibleTodos = (todos, visibility) => {
  switch(visibility) {
    case 'SHOW_DONE':
      return todos.filter(item => item.is_done);
    case 'SHOW_UNDONE':
      return todos.filter(item => !item.is_done);
    default:
      return todos;
  }
}

const mapStateToProps = state => {
  return {
    items: getVisibleTodos(state.todos, state.visibility)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteButtonClick: index => {
      dispatch(deleteToDo(index));
    },
    onToggleButtonClick: index => {
      dispatch(toggleToDo(index));
    },
    onLoad: items => {
      dispatch(loadTodos(items));
    }
  };
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default TodoList;
