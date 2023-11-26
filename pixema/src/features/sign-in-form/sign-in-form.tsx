import { useState } from 'react';
import { Input } from '../../ui/input/input';
import styled from 'styled-components';
import { Button } from '../../ui/button/button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../Auth/authorization.slice';
import { setUserLS } from '../../api/user-localStorage';

export const SingInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const {email, token, id} = useAppSelector(state => state.authorization)
  // const emailUser = useAppSelector((state) => state.authorization.email);
  // const tokenUser = useAppSelector((state) => state.authorization.token);
  // const uidUser = useAppSelector((state) => state.authorization.id);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setUserLS({
          email: user.email,
          token: user.uid,
          id: user.refreshToken,
        });
        navigate('/');
      })
      .catch(() => alert('Неверный логин или пароль!'));
  };

  return (
    <SignInFormWrapper>
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
      <ForgotPasswordWrapper>
        <a href="/sign-in">Forgot password?</a>
      </ForgotPasswordWrapper>
      <Button onClick={() => handleLogin()}>Sign in</Button>
      <GoToSingUpWrapper>
        <p>Don’t have an account?</p>
        <a href="/sign-up">Sign Up</a>
      </GoToSingUpWrapper>
    </SignInFormWrapper>
  );
};

const SignInFormWrapper = styled.div`
  width: 410px;
  margin: auto;
`;

const ForgotPasswordWrapper = styled.div`
  width: 410px;
  margin: -20px auto 40px;

  & a {
    color: var(--text-secondary-color);
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      color: var(--text-active-color);
    }
  }
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
