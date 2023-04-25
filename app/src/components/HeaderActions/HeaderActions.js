import React, { useContext } from 'react';
import ProfileAction from '../ProfileAction/ProfileAction';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './HA.module.scss';
import { IoPower } from 'react-icons/io5';
import { UserContext } from '@/contexts/UserContext';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const HeaderActions = ({ theme, setTheme }) => {
  const { userContext } = useContext(UserContext);
  const router = useRouter();

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const logout = () => {
    try {
      deleteCookie('token');
      router.push('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.header_actions}>
      <ProfileAction />
      <LocaleSwitcher />
      <ThemeSwitcher switchTheme={toggleTheme} />
      {userContext.isLogged &&
        <div onClick={logout} className={styles.logout}>
          <IoPower size={30} />
        </div>
      }
    </div>
  );
}

export default HeaderActions;
