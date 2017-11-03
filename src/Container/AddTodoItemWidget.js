import { connect } from 'react-redux';

import {addTodo} from '../State/Actions';
import AddItemWidget from '../Presentational/AddItemWidget';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onAddButtonClick: title => {
      dispatch(addTodo(title))
    }
  };
};

const AddTodoItemWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemWidget);

export default AddTodoItemWidget;
