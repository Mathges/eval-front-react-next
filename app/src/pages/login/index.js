import React from 'react';
import DefaultLayout from '@/layouts/Default/Default';
import GenericForm from '@/components/GenericForm/GenericForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from './index.module.scss';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

const Login = () => {
  const { t } = useTranslation('common');

  const submit = (formValues) => {
    console.log(formValues);
  }

  return (
    <div className={styles.container}>
      <GenericForm onSubmit={submit} width={"30%"} title={t("form.titles.login")} />
    </div>
  );
}

Login.getLayout = (page) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Login;
