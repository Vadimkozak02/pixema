import { useState } from 'react';
import { Input } from '../../ui/input/input';
import styled from 'styled-components';
import { Button } from '../../ui/button/button';

export const SingInForm: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignInFormWrapper>
      <Input
        placeholder="Your email"
        type="text"
        labelText="email"
        value={name}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <Input
        placeholder="Your password"
        type="password"
        labelText="password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <ForgotPasswordWrapper>
        <a href="!#">Forgot password?</a>
      </ForgotPasswordWrapper>
      <Button onClick={() => console.log('click')}>Sign in</Button>
      <GoToSingUpWrapper>
        <p>Don’t have an account?</p>
        <a href="!#">Sign Up</a>
      </GoToSingUpWrapper>
    </SignInFormWrapper>
  );
};

const SignInFormWrapper = styled.div`
  width: 495px;
  margin: auto;
`;

const ForgotPasswordWrapper = styled.div`
  width: 495px;
  margin: -20px auto 40px;

  & a {
    color: var(--text-secondary-color);
    cursor: pointer;
  }
`;

const GoToSingUpWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  justify-content: center;

  p {
    margin-right: 5px;
  }

  a {
    color: var(--button-bg-primary-color);
    cursor: pointer;
  }
`;
