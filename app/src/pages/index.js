import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocaleSwitcher from '@/components/localeSwitcher/LocaleSwitcher';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

const Index = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <p>{t('home.test')}</p>
      <LocaleSwitcher />
    </div>
  );
}

export default Index;

