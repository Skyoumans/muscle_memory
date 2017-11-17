import React from 'react';
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import styled from 'styled-components'

const FormDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const LoginSignUpPage = () => {
  return (
    <FormDirection>

      <SignUpForm />
      <LoginForm />

    </FormDirection>
  );
};

export default LoginSignUpPage;