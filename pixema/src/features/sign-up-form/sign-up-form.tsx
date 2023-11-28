import { useState } from 'react';
import { Input } from '../../ui/input/input';
import styled from 'styled-components';
import { Button } from '../../ui/button/button';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../hooks';
import { setUser } from '../Auth/authorization.slice';
import { useNavigate } from 'react-router-dom';

export const SingUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/authorization-success');
      })
      .catch(console.error);
  };

  return (
    <SignInFormWrapper>
      <Input
        placeholder="Your name"
        type="text"
        labelText="name"
        value={name}
        onChange={({ currentTarget }) => setName(currentTarget.value)}
      />
      <Input
        placeholder="Your email"
        type="text"
        labelText="email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
      />
      <Input
        placeholder="Your password"
        type="password"
        labelText="password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Input
        placeholder="Confirm password"
        type="password"
        labelText="Confirm password"
        value={confirmPassword}
        onChange={({ currentTarget }) =>
          setConfirmPassword(currentTarget.value)
        }
      />
      <Button onClick={() => handleRegister()}>Sign up</Button>
      <GoToSingUpWrapper>
        <p>Already have an account?</p>
        <a href="/sign-in">Sign In</a>
      </GoToSingUpWrapper>
    </SignInFormWrapper>
  );
};

const SignInFormWrapper = styled.div`
  width: 410px;
  margin: auto;
`;

const GoToSingUpWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-right: 5px;
    color: var(--text-secondary-color);
  }

  a {
    color: var(--button-bg-primary-color);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: var(--text-hover-color);
    }
  }
`;
