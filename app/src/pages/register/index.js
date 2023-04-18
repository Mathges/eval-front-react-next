import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './index.module.scss';
import StandardButton from '@/components/StandardButton/StandardButton';
import DefaultLayout from '@/layouts/Default/Default';
import GenericForm from '@/components/GenericForm/GenericForm';
import LabeledInput from '@/components/LabeledInput/LabeledInput';
import { IoArrowForward } from 'react-icons/io5';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

const Register = () => {
  const { t } = useTranslation('common');

  const [page, setPage] = useState(1);

  const nextPage = () => {
    let pageNumber = page;
    pageNumber += 1
    setPage(pageNumber);
  }

  const previousPage = () => {
    let pageNumber = page;
    pageNumber -= 1
    setPage(pageNumber);
  }

  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name)
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(formValues);
  }

  return (
    <div className={styles.container}>
      <GenericForm
        onSubmit={submit}
        width={"40%"}
        height={"70%"}
        title={t("form.titles.register")}
      >
        {page === 1 &&
          <>
            <div className={styles.inline_inputs}>
              <LabeledInput
                labelTitle={t('form.inputs.labels.firstName')}
                inputType="text"
                inputName="firstName"
                placeholder={t('form.inputs.placeholders.firstName')}
                onChange={handleChange}
                width={"40%"}
              />
              <LabeledInput
                labelTitle={t('form.inputs.labels.lastName')}
                inputType="text"
                inputName="lastName"
                placeholder={t('form.inputs.placeholders.lastName')}
                onChange={handleChange}
                width={"40%"}
              />
            </div>
            <LabeledInput
              labelTitle={t('form.inputs.labels.address')}
              inputType="text"
              inputName="address"
              placeholder={t('form.inputs.placeholders.address')}
              onChange={handleChange}
              width={"90%"}
            />
            <div className={styles.inline_inputs}>
              <LabeledInput
                labelTitle={t('form.inputs.labels.zipcode')}
                inputType="text"
                inputName="zipcode"
                placeholder={t('form.inputs.placeholders.zipcode')}
                onChange={handleChange}
                width={"40%"}
              />
              <LabeledInput
                labelTitle={t('form.inputs.labels.city')}
                inputType="text"
                inputName="city"
                placeholder={t('form.inputs.placeholders.city')}
                onChange={handleChange}
                width={"40%"}
              />
            </div>
            <LabeledInput
              labelTitle={t('form.inputs.labels.email')}
              inputType="text"
              inputName="email"
              placeholder={t('form.inputs.placeholders.email')}
              onChange={handleChange}
              width={"90%"}
            />
            <div className={styles.inline_inputs}>
              <LabeledInput
                labelTitle={t('form.inputs.labels.password')}
                inputType="text"
                inputName="password"
                placeholder={t('form.inputs.placeholders.password')}
                onChange={handleChange}
                width={"40%"}
              />
              <LabeledInput
                labelTitle={t('form.inputs.labels.confirmPassword')}
                inputType="text"
                inputName="confirmPassword"
                placeholder={t('form.inputs.placeholders.confirmPassword')}
                onChange={handleChange}
                width={"40%"}
              />
            </div>
            <div className={styles.form_bottom}>
              <div className={styles.password_rules}>
                <p>{t('form.passwordRules.characterLimit')}</p>
                <p>{t('form.passwordRules.characterTypes')}</p>
              </div>
              <div className={styles.next_icon}>
                <IoArrowForward onClick={nextPage} size={40} />
              </div>
            </div>
          </>
        }
        {page === 2 &&
          <>
            <p>{t('form.question')}</p>
            <StandardButton
              title={t('buttons.register.freelance')}
              type="button"
              width={"30%"}
            />
            <StandardButton
              title={t('buttons.register.company')}
              type="button"
              width={"30%"}
            />
            {/*TODO: finish buttons logic */}
          </>
        }
        {page === 3 &&
          <div>Page 3
          </div>
        }
      </GenericForm>
    </div>
  );
}

Register.getLayout = (page) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Register;
