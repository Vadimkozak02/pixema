import styled from 'styled-components';
import arrowDown from './img/arrowDownSvg.svg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAuth } from '../../hooks';
import { removeUser } from '../../features/Auth/authorization.slice';
import userIco from './img/userIco.svg';
import arrowRight from './img/arrowRightSvg.svg';
import { setUserLS } from '../../api/user-localStorage';

export const User: React.FC = () => {
  const [editMenu, setEditMenu] = useState(false);

  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  const navigate = useNavigate();

  let name = '';
  let nameOfUser: Array<string> = [];
  if (email !== null) {
    nameOfUser = email.split('');
    let index = nameOfUser.findIndex((el) => el === '@');

    nameOfUser.splice(index, nameOfUser.length - index);
    name = nameOfUser.join('');
  }
  const initials = name[0];

  return (
    <UserWrapper>
      <UserNameWrapper>
        <UserInitials>
          {isAuth ? <p>{initials}</p> : <img src={userIco} alt="person logo" />}
        </UserInitials>

        <UserName
          onClick={() =>
            isAuth ? setEditMenu(!editMenu) : navigate('/sign-in')
          }
        >
          {isAuth ? <p>{name}</p> : <p>Sign In</p>}

          <UserNameArrow>
            {isAuth ? (
              <img src={arrowDown} alt="arrow" />
            ) : (
              <img src={arrowRight} alt="right arrow" />
            )}
          </UserNameArrow>
        </UserName>
      </UserNameWrapper>
      <UserSelect
        style={{
          display: isAuth ? 'block' : 'none',
          transform: editMenu ? 'translateY(10px)' : 'translateY(0)',
          visibility: editMenu ? 'visible' : 'hidden',
          opacity: editMenu ? '1' : '0',
        }}
      >
        <UserEditProfile>
          <Link to="/settingsPage">Edit profile</Link>
        </UserEditProfile>
        <UserLogOut
          onClick={() => {
            dispatch(removeUser());
            setUserLS({
              email: '',
              token: '',
              id: '',
            });
          }}
        >
          <Link to="/sign-in">Log Out</Link>
        </UserLogOut>
      </UserSelect>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  position: relative;
  width: 240px;
  z-index: 1;
`;

const UserInitials = styled.div`
  width: 56px;
  height: 56px;
  background-color: var(--button-bg-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  p {
    text-transform: capitalize;
    font-size: 23px;
    font-weight: 700;
    color: var(--text-primary-color);
  }
`;

const UserNameWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const UserName = styled.button`
  width: 170px;
  border: none;
  background-color: transparent;
  color: var(--text-primary-color);
  font-size: 18px;
  font-weight: 600;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const UserNameArrow = styled.div``;

const UserSelect = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  background-color: var(--form-background-color);
  height: 112px;
  width: 99%;
  border-radius: 10px;
  border: 2px solid var(--input-border-color);
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
  transform: translateY(-10px);
  visibility: hidden;
`;

const UserEditProfile = styled.button`
  width: 100%;
  height: 50%;
  border: none;
  border-bottom: 2px solid var(--button-showMore-color);
  display: block;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  color: var(--text-primary-color);
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const UserLogOut = styled.button`
  width: 100%;
  height: 50%;
  border: none;
  font-size: 16px;
  font-weight: 500;
  display: block;
  background-color: transparent;
  color: var(--text-primary-color);
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
