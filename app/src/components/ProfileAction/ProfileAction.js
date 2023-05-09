import React, { useContext } from 'react';
import { IoPerson } from 'react-icons/io5';
import styles from './PA.module.scss';
import { useRouter } from 'next/router';
import { UserContext } from '@/contexts/UserContext';

const ProfileAction = () => {
  const router = useRouter();
  const { userContext } = useContext(UserContext);

  // TODO: fetch api for username on useEffect

  const toProfile = () => {
    if (userContext.isLogged) {
      router.push('/profile');
    } else {
      router.push('/login');
    }
  }

  return (
    <div className={styles.container} >
      {
        userContext.isLogged &&
        <p className={styles.username}>Timothée</p>
      }
      <IoPerson className={styles.icon} onClick={toProfile} />
    </div>
  );
}

export default ProfileAction;
