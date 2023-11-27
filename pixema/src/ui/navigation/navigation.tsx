import styled from 'styled-components';
import homeIco from './img/site-menu-home.png';
import trendsIco from './img/site-menu-trends.png';
import favoritesIco from './img/site-menu-favorites.png';
import settingsIco from './img/site-menu-settings.png';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { reset } from '../../features/search/search.slice';
import { useState } from 'react';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState('');

  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationLinkBtn>
          <NavigationLink
            to="/"
            onClick={() => {
              dispatch(reset());
              setIsActive('1');
              window.scrollTo(0, 0);
            }}
          >
            <HomeItem
              style={{
                color:
                  isActive === '1'
                    ? 'var(--text-active-color)'
                    : 'var(--text-primary-color)',
              }}
            >
              <img src={homeIco} alt="home ico" />
              <p>Home</p>
            </HomeItem>
          </NavigationLink>
        </NavigationLinkBtn>

        <NavigationLinkBtn>
          <NavigationLink
            to="/trends"
            onClick={() => {
              dispatch(reset());
              setIsActive('2');
              window.scrollTo(0, 0);
            }}
          >
            <TrendsItem
              style={{
                color:
                  isActive === '2'
                    ? 'var(--text-active-color)'
                    : 'var(--text-primary-color)',
              }}
            >
              <img src={trendsIco} alt="trends ico" /> <p>Trends</p>
            </TrendsItem>
          </NavigationLink>
        </NavigationLinkBtn>

        <NavigationLinkBtn>
          <NavigationLink
            to="/favorites"
            onClick={() => {
              dispatch(reset());
              setIsActive('3');
              window.scrollTo(0, 0);
            }}
          >
            <FavoritesItem
              style={{
                color:
                  isActive === '3'
                    ? 'var(--text-active-color)'
                    : 'var(--text-primary-color)',
              }}
            >
              <img src={favoritesIco} alt="favorites ico" /> <p>Favorites</p>
            </FavoritesItem>
          </NavigationLink>
        </NavigationLinkBtn>

        <NavigationLinkBtn>
          <NavigationLink
            to="/settingsPage"
            onClick={() => {
              dispatch(reset());
              setIsActive('4');
              window.scrollTo(0, 0);
            }}
          >
            <SettingsItem
              style={{
                color:
                  isActive === '4'
                    ? 'var(--text-active-color)'
                    : 'var(--text-primary-color)',
              }}
            >
              <img src={settingsIco} alt="settings ico" /> <p>Settings</p>
            </SettingsItem>
          </NavigationLink>
        </NavigationLinkBtn>
      </NavigationList>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div``;

const NavigationList = styled.div`
  padding-left: 0;
`;

const NavigationLinkBtn = styled.button`
  /* width: 100%; */
  display: block;
  border: none;
  background-color: transparent;
`;

const HomeItem = styled.div`
  padding-left: 3px;
  width: 80px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }

  &:focus {
    color: var(--button-bg-primary-color);
  }

  img {
    margin-right: 15px;
  }
`;

const TrendsItem = styled.div`
  padding-left: 5px;
  width: 90px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }

  &:focus {
    color: var(--button-bg-primary-color);
  }

  img {
    margin-right: 19px;
  }
`;
const FavoritesItem = styled.div`
  padding-left: 5px;
  width: 120px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }

  &:focus {
    color: var(--button-bg-primary-color);
  }

  img {
    margin-right: 20px;
  }
`;
const SettingsItem = styled.div`
  padding-left: 0;
  width: 110px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }

  &:focus {
    color: var(--button-bg-primary-color);
  }

  img {
    margin-right: 15px;
  }
`;

const NavigationLink = styled(Link)``;
