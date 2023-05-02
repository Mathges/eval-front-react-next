import React, { useState, useContext, useEffect } from 'react';
import DefaultLayout from '@/layouts/Default/Default';
import GenericForm from '@/components/GenericForm/GenericForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from './index.module.scss';
import GenericLink from '@/components/GenericLink/GenericLink';
import LabeledInput from '@/components/LabeledInput/LabeledInput';
import StandardButton from '@/components/StandardButton/StandardButton';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { UserContext } from '@/contexts/UserContext';
import useApi from '@/hooks/useApi';

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
  const router = useRouter();
  const { setUserContext } = useContext(UserContext);
  const { data, error, loading, fetchData: login } = useApi({ method: 'POST', url: '/auth/login', body: formValues, token: null });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (data.token) {
      setCookie('token', data.token, { sameSite: 'none', secure: true });
      setUserContext({ isLogged: true });
      router.push('/profile');
    }
  }, [data]);

  const submit = async (event) => {
    event.preventDefault();
    try {
      await login();
    } catch (err) {
      console.error(err);
    }
  };

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
        content={t("links.toRegister")}
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
