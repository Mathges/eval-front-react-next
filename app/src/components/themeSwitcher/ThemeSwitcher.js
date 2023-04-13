import React from 'react';
import { IoContrastSharp } from 'react-icons/io5'
import styles from './TS.module.scss'
const ThemeSwitcher = ({ switchTheme }) => {

  return (
    <IoContrastSharp onClick={switchTheme} className={styles.icon}>Switch Theme</IoContrastSharp>
  );
};

export default ThemeSwitcher;