import Link from 'next/link';
import React from 'react';
import styles from './GL.module.scss';

const GenericLink = ({ link, content }) => {
  return (
    <Link href={link} className={styles.link}>{content}</Link>
  );
}

export default GenericLink;
