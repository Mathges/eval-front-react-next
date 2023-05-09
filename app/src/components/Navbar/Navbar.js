import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ links }) => {
  return (
    <div className={styles.container}>
      {links.map(link => {
        return (
          <Link href={link.to} className={styles.link} key={link.name}>
            {link.name}
          </Link>
        )
      })}
    </div>
  );
}

export default Navbar;
