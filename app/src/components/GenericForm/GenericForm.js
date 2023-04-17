import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import StandardButton from '../StandardButton/StandardButton';
import LabeledInput from '../LabeledInput/LabeledInput';
import styles from './GF.module.scss';

const GenericForm = ({ onSubmit, width, title }) => {
  const { t } = useTranslation('common');

  const [formValues, setFormValues] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container} style={{ width: width }}>
      <h2 className={styles.title}>{title}</h2>
      <LabeledInput
        labelTitle={t('form.inputs.labels.email')}
        inputType="email"
        name="email"
        placeholder={t('form.inputs.placeholders.email')}
        onChange={handleChange}
        width={"90%"}
      />
      <LabeledInput
        labelTitle={t('form.inputs.labels.password')}
        inputType="password"
        name="password"
        placeholder={t('form.inputs.placeholders.password')}
        onChange={handleChange}
        width={"90%"}
      />
      <StandardButton title={t('buttons.login')} type="submit" width={"50%"} />
    </form>
  );
};

export default GenericForm;