import { connect } from 'react-redux';

import List from '../Presentational/List';
import { deleteToDo } from '../State/Actions';
import { toggleToDo } from '../State/Actions';
import { loadTodos } from '../State/Actions';

const mapStateToProps = state => {
  return {
    items: state
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
