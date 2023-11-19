import styled from 'styled-components';
import homeIco from './img/site-menu-home.png';
import trendsIco from './img/site-menu-trends.png';
import favoritesIco from './img/site-menu-favorites.png';
import settingsIco from './img/site-menu-settings.png';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationLink to="/">
          <HomeItem>
            <img src={homeIco} alt="home ico" />
            <p>Home</p>
          </HomeItem>
        </NavigationLink>
        <NavigationLink to="/trends">
          <TrendsItem>
            <img src={trendsIco} alt="trends ico" /> <p>Trends</p>
          </TrendsItem>
        </NavigationLink>
        <NavigationLink to="/favorites">
          <FavoritesItem>
            <img src={favoritesIco} alt="favorites ico" /> <p>Favorites</p>
          </FavoritesItem>
        </NavigationLink>
        <NavigationLink to="/settingsPage">
          <SettingsItem>
            <img src={settingsIco} alt="settings ico" /> <p>Settings</p>
          </SettingsItem>
        </NavigationLink>
      </NavigationList>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div``;

const NavigationList = styled.div`
  padding-left: 0;
`;

const HomeItem = styled.button`
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

const TrendsItem = styled.button`
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
const FavoritesItem = styled.button`
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
const SettingsItem = styled.button`
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
