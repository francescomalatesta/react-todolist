import React from 'react';

const VisibilityChooser = ({onAllClick, onDoneClick, onUndoneClick, visibility}) => {
  return (
    <div>
      <button style={{marginRight:10}} className="btn btn-info" type="button" onClick={onAllClick}>Show All</button>
      <button style={{marginRight:10}} className="btn btn-info" type="button" onClick={onDoneClick}>Show Done</button>
      <button className="btn btn-info" type="button" onClick={onUndoneClick}>Show Undone</button>

      <span style={{paddingLeft:20}}>Now showing: {visibility === 'SHOW_DONE' ? 'Done' : visibility === 'SHOW_UNDONE' ? 'Undone' : 'All'} Todos</span>
    </div>
  );
};

export default VisibilityChooser;
