import React, { useState, useContext } from 'react';
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
  const { userContext, setUserContext } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: { 'Content-Type': 'application/json' },
      });
      await response.json().then((result) => {
        setCookie('token', result.token, { sameSite: 'none', secure: true });
      }).then(() => {
        setUserContext({ isLogged: true })
        router.push('/profile');
      });
      // TODO: carefull with this in production ?
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
