import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DefaultLayout from '@/layouts/Default/Default';
import Admin from '@/layouts/Admin/Admin';

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
    <p>Index</p>
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

