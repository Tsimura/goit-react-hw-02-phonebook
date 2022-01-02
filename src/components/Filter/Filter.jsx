import React from 'react';
const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      Find contacts by name
      <br />
      <input type="text" value={value} onChange={onChangeFilter} />
    </div>
  );
};
export default Filter;
