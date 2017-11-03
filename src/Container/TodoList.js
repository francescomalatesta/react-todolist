import { connect } from 'react-redux';

import List from '../Presentational/List.js';

const mapStateToProps = state => {
  return {
    items: state
  }
}

const TodoList = connect(
  mapStateToProps,
)(List);

export default TodoList;
