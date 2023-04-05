import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LocaleSwitcher = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleChange = (event) => {
    const newLocale = event.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div>
      <div>
        <select value={router.locale} onChange={handleChange}>
          <option value="en">{t('header.localeSwitcher.en')}</option>
          <option value="fr">{t('header.localeSwitcher.fr')}</option>
        </select>
      </div>
    </div>
  );
}

export default LocaleSwitcher;