import React from 'react';
import styles from './GS.module.scss';

const GenericSelect = ({ name, options, onChange }) => {
  console.log(options);

  return (
    <>
      <h3 className={styles.title}>{name}</h3>
      <select name={name} value={""} onChange={onChange} className={styles.select}>
        <option key={"default"} value="" />
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default GenericSelect;