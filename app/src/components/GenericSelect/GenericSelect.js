import React from 'react';

const GenericSelect = ({ name, options, value, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default GenericSelect;