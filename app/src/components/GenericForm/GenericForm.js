import React from 'react';
import styles from './GF.module.scss';

const GenericForm = ({ onSubmit, width, height, title, children }) => {

  return (
    <form onSubmit={onSubmit} className={styles.container} style={{ width: width, height: height }}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </form>
  );
};

export default GenericForm;