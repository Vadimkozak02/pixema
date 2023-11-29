import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Input } from '../../ui/input/input';
import styled from 'styled-components';
import { Button } from '../../ui/button/button';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../hooks';
import { setUser } from '../Auth/authorization.slice';
import { useNavigate } from 'react-router-dom';

export const SingUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState('Поле не может быть пустым');

  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Поле не может быть пустым');

  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState(
    'Поле не может быть пустым'
  );

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    'Поле не может быть пустым'
  );

  const [formValid, setFormValid] = useState(false);

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

  useEffect(() => {
    if (nameError || emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, passwordError, confirmPasswordError]);

  interface FocusEvent<T = Element> extends SyntheticEvent<T> {
    relatedTarget: EventTarget | null;
    target: EventTarget & T;
  }

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError('Имя не может быть меньше 2 символов');
      if (!e.target.value) {
        setNameError('Поле не может быть пустым');
      }
    } else {
      setNameError('');
    }
  };

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

  const confirmHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('Пароли не сопадают');
      if (!e.target.value) {
        setConfirmPasswordError('Поле не может быть пустым');
      }
    } else {
      setConfirmPasswordError('');
    }
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'confirm password':
        setConfirmPasswordDirty(true);
        break;
    }
  };

  return (
    <SignUpFormWrapper>
      <Input
        onBlur={(event) => blurHandler(event)}
        name="name"
        placeholder="Your name"
        type="text"
        labelText="name"
        value={name}
        onChange={(event) => nameHandler(event)}
      />
      {nameDirty && nameError && <Error>{nameError}</Error>}
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
      <Input
        onBlur={(event) => blurHandler(event)}
        name="confirm password"
        placeholder="Confirm password"
        type="password"
        labelText="Confirm password"
        value={confirmPassword}
        onChange={(event) => confirmHandler(event)}
      />
      {confirmPasswordDirty && confirmPasswordError && (
        <Error>{confirmPasswordError}</Error>
      )}
      <Button disabled={!formValid} onClick={() => handleRegister()}>
        Sign up
      </Button>
      <GoToSignUpWrapper>
        <p>Already have an account?</p>
        <a href="/sign-in">Sign In</a>
      </GoToSignUpWrapper>
    </SignUpFormWrapper>
  );
};

const SignUpFormWrapper = styled.div`
  width: 410px;
  margin: auto;
`;

const GoToSignUpWrapper = styled.div`
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
