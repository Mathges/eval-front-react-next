import React from 'react';
import styles from './LI.module.scss';

const LabeledInput = ({ labelTitle, inputType, inputName, placeholder, onChange, width }) => {
  return (
    <label className={styles.container} style={{ width: `${width}` }}>
      {labelTitle}
      <input type={inputType} name={inputName} placeholder={placeholder} onChange={onChange} />
    </label>
  );
}

export default LabeledInput;
