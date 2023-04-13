import React from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import { useRouter } from 'next/router';
import ProfileAction from '@/components/ProfileAction/ProfileAction';

const Header = ({ theme, setTheme }) => {
  const router = useRouter();

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const goHome = () => {
    router.push('/')
  }

  return (
    <div className={styles.header}>
      <div className={styles.banner} onClick={goHome}>
        <Image src="/images/logo.png" alt="brand logo" width={75} height={75} />
        <h1 className={styles.title}>FreeSearch</h1>
      </div>
      <div className={styles.header_actions}>
        <ProfileAction />
        <LocaleSwitcher />
        <ThemeSwitcher switchTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default Header;
