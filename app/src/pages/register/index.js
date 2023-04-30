import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from './index.module.scss';
import StandardButton from '@/components/StandardButton/StandardButton';
import DefaultLayout from '@/layouts/Default/Default';
import GenericForm from '@/components/GenericForm/GenericForm';
import LabeledInput from '@/components/LabeledInput/LabeledInput';
import { IoArrowForward } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
import FreelanceFormCol from '@/components/FreelanceFormCol/FreelanceFormCol';
import useApi from '@/hooks/useApi';
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

const Register = () => {
  const { t } = useTranslation('common');
  const [page, setPage] = useState(1);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formValues, setFormValues] = useState({});
  const { data, error, isLoading, fetchData: register } = useApi({ method: 'POST', url: '/user/register', body: formValues, token: null });

  const nextPage = () => {
    if (formValues.password !== formValues.confirmPassword) {
      setPasswordMatch(false);
      return
    }
    let pageNumber = page;
    pageNumber += 1
    setPage(pageNumber);
  }

  const previousPage = () => {
    let pageNumber = page;
    pageNumber -= 1
    setPage(pageNumber);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "dailyTax" || name === "experienceYears") {
      let currentState = formValues;
      currentState.freelance = { ...currentState.freelance, [name]: value }
      setFormValues(currentState);
    } else if (name === "socialReason" || name === "status" || name === "siret" || name === "headOffice") {
      let currentState = formValues;
      currentState.company = { ...currentState.company, [name]: value }
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  }

  const isFreelance = () => {
    // in case user clicked on wrong button and goes back
    if (formValues.company) {
      let removeCompany = formValues;
      delete removeCompany.company;
      setFormValues(removeCompany);
    }

    let currentState = formValues;
    // there is just init arrays, it's more easier to do it now
    currentState.freelance = {
      skills: [],
      professions: []
    }
    setFormValues(currentState);
    nextPage();
  }

  const isCompany = () => {
    // in case user clicked on wrong button and goes back
    if (formValues.freelance) {
      let removeFreelance = formValues;
      delete removeFreelance.freelance;
      setFormValues(removeFreelance);
    }

    let currentState = formValues;
    currentState.company = {}
    setFormValues(currentState);
    nextPage();
  }

  const submit = async (event) => {
    event.preventDefault();
    try {
      delete formValues.confirmPassword;
      console.log('before register', formValues);
      await register();
      nextPage();
    } catch (error) {
      console.error(err);
    }
  }

  const options = ['Skill 1', 'Skill 2', 'Skill 3'];
  const options2 = ['Profession 1', 'Profession 2', 'Profession 3'];

  return (
    <div className={styles.container}>
      <GenericForm
        onSubmit={submit}
        width={"40%"}
        height={"80%"}
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
                inputName="zipCode"
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
              labelTitle={t('form.inputs.labels.phoneNumber')}
              inputType="text"
              inputName="phoneNumber"
              placeholder={t('form.inputs.placeholders.phoneNumber')}
              onChange={handleChange}
              width={"40%"}
            />
            <LabeledInput
              labelTitle={t('form.inputs.labels.email')}
              inputType="text"
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
            <div className={styles.password_match}>
              <LabeledInput
                labelTitle={t('form.inputs.labels.confirmPassword')}
                inputType="password"
                inputName="confirmPassword"
                placeholder={t('form.inputs.placeholders.confirmPassword')}
                onChange={handleChange}
                width={"90%"}
              />
              {!passwordMatch &&
                <p className={styles.no_match_passwords}>{t('form.passwordRules.noMatch')}</p>
              }
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
              onClick={isFreelance}
            />
            <StandardButton
              title={t('buttons.register.company')}
              type="button"
              width={"30%"}
              onClick={isCompany}
            />
            <div className={styles.form_bottom}>
              <div className={styles.next_icon}>
                <IoArrowBack onClick={previousPage} size={40} />
              </div>
            </div>
          </>
        }
        {page === 3 &&
          <>
            {formValues.freelance &&
              <>
                <div className={styles.inline_inputs}>
                  <LabeledInput
                    labelTitle={t('form.inputs.labels.dailyTax')}
                    inputType="text"
                    inputName="dailyTax"
                    onChange={handleChange}
                    width={"30%"}
                  />
                  <LabeledInput
                    labelTitle={t('form.inputs.labels.experienceYears')}
                    inputType="text"
                    inputName="experienceYears"
                    onChange={handleChange}
                    width={"30%"}
                  />
                </div>
                <div className={styles.selects}>
                  <FreelanceFormCol
                    subject={"skills"}
                    options={options}
                    formValues={formValues}
                    setFormValues={setFormValues}
                  />
                  <FreelanceFormCol
                    subject={"professions"}
                    options={options2}
                    formValues={formValues}
                    setFormValues={setFormValues}
                  />
                </div>
              </>
            }
            {formValues.company &&
              <>
                <div className={styles.inline_inputs}>
                  <LabeledInput
                    labelTitle={t('form.inputs.labels.socialReason')}
                    inputType="text"
                    inputName="socialReason"
                    placeholder={t('form.inputs.placeholders.socialReason')}
                    onChange={handleChange}
                    width={"40%"}
                  />
                  <LabeledInput
                    labelTitle={t('form.inputs.labels.status')}
                    inputType="text"
                    inputName="status"
                    placeholder={t('form.inputs.placeholders.status')}
                    onChange={handleChange}
                    width={"40%"}
                  />
                </div>
                <LabeledInput
                  labelTitle={t('form.inputs.labels.siret')}
                  inputType="text"
                  inputName="siret"
                  placeholder={t('form.inputs.placeholders.siret')}
                  onChange={handleChange}
                  width={"40%"}
                />
                <LabeledInput
                  labelTitle={t('form.inputs.labels.headOfficeAddress')}
                  inputType="text"
                  inputName="headOffice"
                  placeholder={t('form.inputs.placeholders.headOfficeAddress')}
                  onChange={handleChange}
                  width={"90%"}
                />
              </>
            }
            <div className={styles.form_bottom}>
              <div className={styles.next_icon}>
                <IoArrowBack onClick={previousPage} size={40} />
              </div>
              <StandardButton
                title={t('buttons.register.register')}
                type="submit"
                width={"40%"}
              />
            </div>
          </>
        }
        {page === 4 &&
          <p>
            {t('form.confirmEmail')}
          </p>
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
