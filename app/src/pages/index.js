import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LocaleSwitcher from '@/components/localeSwitcher/LocaleSwitcher';
import ThemeSwitcher from '@/components/themeSwitcher/ThemeSwitcher';

import styles from '../styles/index.module.scss'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

const Index = () => {
  const { t } = useTranslation('common');

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bodyClassName = isDarkMode ? 'dark' : 'light';


  return (
    <div className={`${bodyClassName} ${styles.container}`}>
      <p>{t('home.test')}</p>
      <LocaleSwitcher />
      <ThemeSwitcher switchTheme={toggleTheme} />
    </div >
  );
}

export default Index;

