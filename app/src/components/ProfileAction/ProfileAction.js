import React from 'react';
import { IoPerson } from 'react-icons/io5';
import styles from './PA.module.scss';
import { useRouter } from 'next/router';

const ProfileAction = () => {
  const router = useRouter();

  // TODO: change when login feature is up
  const isLogged = false;
  let username = "";

  if (isLogged) {
    username = "timothée"
  }

  const toProfile = () => {
    if (isLogged) {
      router.push('/profile');
    } else {
      router.push('/login');
    }
  }

  return (
    <div className={styles.container} >
      {
        isLogged &&
        <p className={styles.username}>{username}</p>
      }
      <IoPerson className={styles.icon} onClick={toProfile} />
    </div>
  );
}

export default ProfileAction;
