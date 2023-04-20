import React, { useState } from 'react';
import DefaultLayout from '@/layouts/Default/Default';
import GenericForm from '@/components/GenericForm/GenericForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from './index.module.scss';
import GenericLink from '@/components/GenericLink/GenericLink';
import LabeledInput from '@/components/LabeledInput/LabeledInput';
import StandardButton from '@/components/StandardButton/StandardButton';

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
  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();
    console.log('FV', formValues);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.container}>
      <GenericForm
        onSubmit={submit}
        width={"30%"}
        title={t("form.titles.login")}
      >
        <LabeledInput
          labelTitle={t('form.inputs.labels.email')}
          inputType="email"
          inputName="email"
          placeholder={t('form.inputs.placeholders.email')}
          onChange={handleChange}
          width={"90%"}
        />
        <LabeledInput
          labelTitle={t('form.inputs.labels.password')}
          inputType="password"
          inputName="password"
          placeholder={t('form.inputs.placeholders.password')}
          onChange={handleChange}
          width={"90%"}
        />
        <StandardButton
          title={t('buttons.login')}
          type="submit"
          width={"50%"}
        />
      </GenericForm>
      <GenericLink
        link={"/register"}
        content={t("links.to-register")}
      />
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
