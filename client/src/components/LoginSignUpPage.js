import React from 'react';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'

const LoginSignUpPage = () => {
  return (
    <div>
      <div>
      <SignUpForm />
      </div>
      <div>
      <LoginForm />
      </div>
    </div>
  );
};

export default LoginSignUpPage;