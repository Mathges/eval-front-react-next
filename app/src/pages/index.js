import React from 'react';
import { useTranslation } from 'next-i18next';
import DefaultLayout from '@/layouts/Default/Default';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
    <p>{t('home.test')}</p>
  );
}

Index.getLayout = (page) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}
export default Index;

