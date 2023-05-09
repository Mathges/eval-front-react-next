import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { IoLanguage } from 'react-icons/io5';
import styles from './LS.module.scss';

const LocaleSwitcher = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLocale = (newLocale) => {
    setShowDropdown(false);
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <>
      <IoLanguage onClick={toggleDropdown} className={styles.icon} />
      {showDropdown && (
        <div className={styles.dropdown}>
          <div
            onClick={() => changeLocale('en')}
          >
            {t('header.localeSwitcher.en')}
          </div>
          <div
            onClick={() => changeLocale('fr')}
          >
            {t('header.localeSwitcher.fr')}
          </div>

        </div>
      )}
    </>
  );
};

export default LocaleSwitcher;