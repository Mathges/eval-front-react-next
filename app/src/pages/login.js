import React from 'react';
import DefaultLayout from '@/layouts/Default/Default';
import StandardButton from '@/components/StandardButton/StandardButton';

const Login = () => {
  const test = () => {
    console.log('yooo');
  }

  return (
    <div>
      <StandardButton title="Test" type="button" onClick={test} />
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
