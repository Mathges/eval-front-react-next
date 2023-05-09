import React, { useState } from 'react';
import GenericSelect from '../GenericSelect/GenericSelect';
import styles from './FFC.module.scss';
import { IoClose } from 'react-icons/io5';

const FreelanceFormCol = ({ subject, options, formValues, setFormValues }) => {
  const [displayedOptions, setDisplayedOptions] = useState([]);
  //this one is needed because it will act on arrays, not directly on key/value pairs
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    let currentState = formValues;
    currentState.freelance[name].push(value);
    setFormValues(currentState);

    let displayOptions = [...displayedOptions, value];
    setDisplayedOptions(displayOptions);

  }

  const removeValue = (event, index, value) => {
    event.preventDefault();
    event.stopPropagation();
    let currentState = formValues;
    currentState.freelance[subject].splice(index, 1);
    setFormValues({ ...currentState });

    let displayOptions = [...displayedOptions];
    displayOptions.splice(index, 1);
    setDisplayedOptions(displayOptions);
  }

  return (
    <div className={styles.container}>
      <GenericSelect
        name={subject}
        options={options}
        onChange={handleSelectChange}
      />
      {displayedOptions.map((value, index) => (
        <div key={index} className={styles.selected_options}>
          <p>{value}</p>
          <IoClose size={20} onClick={(event) => removeValue(event, index, value)} />
        </div>
      ))}
    </div>

  );
}

export default FreelanceFormCol;
