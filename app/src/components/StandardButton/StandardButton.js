import React from 'react';
import styles from './SB.module.scss';

const StandardButton = ({ type, title, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>{title}</button>
  );
}

export default StandardButton;
