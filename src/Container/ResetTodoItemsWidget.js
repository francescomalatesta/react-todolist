import { connect } from 'react-redux';

import {resetTodos} from '../State/Actions';
import ResetItemsWidget from '../Presentational/ResetItemsWidget';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onResetButtonClick: () => {
      dispatch(resetTodos())
    }
  };
};

const ResetTodoItemsWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetItemsWidget);

export default ResetTodoItemsWidget;
