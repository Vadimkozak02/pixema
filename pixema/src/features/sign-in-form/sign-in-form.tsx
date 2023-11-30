import { ChangeEvent, SyntheticEvent, useState } from 'react';
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
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле не может быть пустым');

  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState(
    'Поле не может быть пустым'
  );

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
            colorMode: false,
          })
        );
        setUserLS({
          email: user.email,
          token: user.uid,
          id: user.refreshToken,
          colorMode: false,
        });
        navigate('/');
      })
      .catch(() => alert('Неверный логин или пароль!'));
  };

  interface FocusEvent<T = Element> extends SyntheticEvent<T> {
    relatedTarget: EventTarget | null;
    target: EventTarget & T;
  }

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Длина пароля должна быть не меньше 6 символов');
      if (!e.target.value) {
        setPasswordError('Поле не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <SignInFormWrapper>
      <Input
        onBlur={(event) => blurHandler(event)}
        name="email"
        placeholder="Your email"
        type="text"
        labelText="email"
        value={email}
        onChange={(event) => emailHandler(event)}
      />
      {emailDirty && emailError && <Error>{emailError}</Error>}
      <Input
        onBlur={(event) => blurHandler(event)}
        name="password"
        placeholder="Your password"
        type="password"
        labelText="password"
        value={password}
        onChange={(event) => passwordHandler(event)}
      />
      {passwordDirty && passwordError && <Error>{passwordError}</Error>}
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

const Error = styled.div`
  color: var(--rating-orange-color);
  margin: -20px 0 20px;
`;
