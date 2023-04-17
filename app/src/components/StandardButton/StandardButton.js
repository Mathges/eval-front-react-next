import React from 'react';
import styles from './SB.module.scss';

const StandardButton = ({ type, title, onClick, width }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button} style={{ width: width }}>{title}</button>
  );
}

export default StandardButton;
