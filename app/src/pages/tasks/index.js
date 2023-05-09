import React from 'react';
import DefaultLayout from '@/layouts/Default/Default';
import SubLayout from '@/layouts/SubLayout/SubLayout';
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

const Tasks = () => {
  return (
    <div>
      <p>tasks</p>
    </div>
  );
}

Tasks.getLayout = (page) => {
  return (
    <DefaultLayout>
      <SubLayout>
        {page}
      </SubLayout>
    </DefaultLayout>
  )
}

export default Tasks;
