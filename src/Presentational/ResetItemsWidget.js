import React from 'react';

const ResetItemsWidget = ({onResetButtonClick}) => {
  return (
    <button className="btn btn-danger" type="button" onClick={onResetButtonClick}>Reset</button>
  );
};

export default ResetItemsWidget;
