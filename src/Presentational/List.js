import React from 'react';

import ListItem from './ListItem.js';

const renderEmptyList = () => {
  return (
    <i>No items here!</i>
  );
};

const List = ({items, onDeleteButtonClick, onToggleButtonClick}) => {
  if(items.length === 0) {
    return renderEmptyList();
  }

  return (
    <ul>
      {items.map((item, index) => {
        return <ListItem
          index={index}
          key={index}
          title={item.title}
          isDone={item.is_done}
          onDeleteButtonClick={onDeleteButtonClick}
          onToggleButtonClick={onToggleButtonClick}
          />
      })}
    </ul>
  );
};

export default List;
