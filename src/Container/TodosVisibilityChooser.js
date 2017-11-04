import { connect } from 'react-redux';

import {showAllTodos, showOnlyDoneTodos, showOnlyUndoneTodos} from '../State/Actions';
import VisibilityChooser from '../Presentational/VisibilityChooser';

const mapStateToProps = state => {
  return {
    visibility: state.visibility
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAllClick: () => {
      dispatch(showAllTodos());
    },
    onDoneClick: () => {
      dispatch(showOnlyDoneTodos());
    },
    onUndoneClick: () => {
      dispatch(showOnlyUndoneTodos());
    }
  };
};

const TodosVisibilityChooser = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityChooser);

export default TodosVisibilityChooser;
