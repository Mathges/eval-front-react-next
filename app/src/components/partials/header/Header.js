import React, { useEffect, useContext } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import HeaderActions from '@/components/HeaderActions/HeaderActions';
import { UserContext } from '@/contexts/UserContext';

const Header = ({ theme, setTheme }) => {
  const router = useRouter();
  const { userContext } = useContext(UserContext);

  const goHome = () => {
    router.push('/');
  };

  useEffect(() => {
    console.log(userContext)
  }, [userContext]);

  return (
    <div className={styles.header}>
      <div className={styles.banner} onClick={goHome}>
        <Image src="/images/logo.png" alt="brand logo" width={75} height={75} />
        <h1 className={styles.title}>FreeSearch</h1>
      </div>
      <HeaderActions theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default Header;
