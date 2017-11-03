import React from 'react';

const ListItem = ({title, is_done}) => {
  return (
    <li>{title} - <i>{is_done ? 'Fatto' : 'Da Fare'}</i></li>
  );
};

export default ListItem;
