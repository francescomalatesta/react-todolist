import React from 'react';

const ListItem = ({title, isDone, index, onDeleteButtonClick, onToggleButtonClick}) => {
  return (
    <li>
      {title}
      <span style={{paddingLeft: 10}}>
        <button type="button" onClick={() => onToggleButtonClick(index)}>Mark as {isDone === 1 ? '"To Do"' : '"Done"'}</button>
        <button type="button" onClick={() => onDeleteButtonClick(index)}>Delete</button>
      </span>
    </li>
  );
};

export default ListItem;
