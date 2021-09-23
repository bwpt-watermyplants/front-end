import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

const Auth = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const { push } = useHistory();

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   axiosWithAuth()
  //     .post('/login', formValues)
  //     .then((res) => {
  //       console.log('Axios Login Post', res);
  //       localStorage.setItem('token', res.data.payload);
  //       push('/Home');
  //     })
  //     .catch((err) => {
  //       console.log({ err });
  //     });
  // };

  return (
    <>
      <div className='flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
            {isNewUser ? <SignUpForm /> : <SignInForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
