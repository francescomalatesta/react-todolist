import React from 'react';

const ListItem = ({title, isDone, index, onDeleteButtonClick, onToggleButtonClick}) => {
  return (
    <li style={{paddingTop: 10, paddingBottom: 10}}>
      {title}
      <span style={{paddingLeft: 10}}>
        <button className="btn btn-sm btn-info" style={{marginRight: 10}} type="button" onClick={() => onToggleButtonClick(index)}>Mark as {isDone === 1 ? '"To Do"' : '"Done"'}</button>
        <button className="btn btn-sm btn-danger" type="button" onClick={() => onDeleteButtonClick(index)}>Delete</button>
      </span>
    </li>
  );
};

export default ListItem;
