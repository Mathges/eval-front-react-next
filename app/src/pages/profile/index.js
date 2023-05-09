import React from 'react';
import DefaultLayout from '@/layouts/Default/Default';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SubLayout from '@/layouts/SubLayout/SubLayout';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

const Profile = () => {
  return (
    <div>
      <p>Profile</p>
    </div>
  );
}

Profile.getLayout = (page) => {
  return (
    <DefaultLayout>
      <SubLayout>
        {page}
      </SubLayout>
    </DefaultLayout>
  )
}

export default Profile;
