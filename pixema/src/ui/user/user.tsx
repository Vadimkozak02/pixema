import styled from 'styled-components';
import arrowDown from './img/arrowDownSvg.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  // userEditMenu: () => void;
};

export const User: React.FC<Props> = ({ name }) => {
  const [editMenu, setEditMenu] = useState(false);

  const nameOfUser = name.split(' ');
  const arrOfInitials = nameOfUser.map((el) => el[0]);
  const initials = arrOfInitials.join('');

  return (
    <UserWrapper>
      <UserNameWrapper>
        <UserInitials>
          <p>{initials}</p>
        </UserInitials>
        <UserName onClick={() => setEditMenu(!editMenu)}>
          <p>{name}</p>
          <UserNameArrow>
            <img src={arrowDown} alt="arrow" />
          </UserNameArrow>
        </UserName>
      </UserNameWrapper>
      <UserSelect
        style={{
          // top: editMenu ? '65px' : '-55px',
          transform: editMenu ? 'translateY(10px)' : 'translateY(0)',
          visibility: editMenu ? 'visible' : 'hidden',
          opacity: editMenu ? '1' : '0',
        }}
      >
        <UserEditProfile>
          <Link to="/settingsPage">Edit profile</Link>
        </UserEditProfile>
        <UserLogOut>
          <Link to="/sign-in">Log Out</Link>
        </UserLogOut>
      </UserSelect>
    </UserWrapper>
  );
};

const UserWrapper = styled.div`
  position: relative;
  width: 240px;
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
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary-color);
  }
`;

const UserNameWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 10;
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
`;
