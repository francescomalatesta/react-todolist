import React from 'react';

const VisibilityChooser = ({onAllClick, onDoneClick, onUndoneClick, visibility}) => {
  return (
    <div>
      <button type="button" onClick={onAllClick}>Show All</button>
      <button type="button" onClick={onDoneClick}>Show Done</button>
      <button type="button" onClick={onUndoneClick}>Show Undone</button>
       - Now showing: {visibility === 'SHOW_DONE' ? 'Done' : visibility === 'SHOW_UNDONE' ? 'Undone' : 'All'} Todos
    </div>
  );
};

export default VisibilityChooser;
