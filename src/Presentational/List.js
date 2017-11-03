import React from 'react';

import ListItem from './ListItem.js';

const renderEmptyList = () => {
  return (
    <i>No items here!</i>
  );
};

const List = ({items}) => {
  if(items.length === 0) {
    return renderEmptyList();
  }

  return (
    <ul>
      {items.map((item, index) => {
        return <ListItem key={index} title={item.title} is_done={item.is_done} />
      })}
    </ul>
  );
};

export default List;
