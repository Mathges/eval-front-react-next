import React from 'react';
import { useTranslation } from 'next-i18next';
import DefaultLayout from '@/layouts/Default/Default';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './index.module.scss';
import Image from 'next/image';
import StandardButton from '@/components/StandardButton/StandardButton';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  // Just a static page with some text and a button to go to register page
  return (
    <div className={styles.container}>
      <div className={styles.paragraphs}>
        <p>{t('home.presentation')}</p>
        <p>{t('home.freelancePresentation')}</p>
        <p>{t('home.companyPresentation')}</p>
      </div>
      <Image src="/images/homePic.jpg" width={500} height={500} alt="picture of people shaking hand" />
      <div>
        <p>{t('home.goRegister')}</p>
        <StandardButton type={"button"} title={t("buttons.register.register")} onClick={() => router.push("/register")} width={250} />
      </div>
    </div>

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

