import React, { useEffect, useState } from 'react';
import Header from '@/components/partials/Header/Header';
import styles from './Default.module.scss';
import { Inter } from 'next/font/google';
import { UserProvider } from '@/contexts/UserContext';

// google font
const inter = Inter({ subsets: ['latin'] });

// In this layout I define global things like theme, fonts... because it will be used on whole app
const DefaultLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const bodyClassName = isDarkMode ? 'dark' : 'light';

  return (
    <UserProvider>
      <div className={`${bodyClassName} ${styles.container} ${inter.className}`}>
        <Header theme={isDarkMode} setTheme={setIsDarkMode} />
        {children}
      </div>
    </UserProvider>
  );
}

export default DefaultLayout;
