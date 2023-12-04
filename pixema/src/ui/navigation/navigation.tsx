import styled from 'styled-components';
import homeIco from './img/site-menu-home.png';
import trendsIco from './img/site-menu-trends.png';
import favoritesIco from './img/site-menu-favorites.png';
import settingsIco from './img/site-menu-settings.png';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { reset } from '../../features/search/search.slice';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationLinkBtn>
          <NavLink
            to="/"
            onClick={() => {
              dispatch(reset());
              window.scrollTo(0, 0);
            }}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-active-color)'
                : 'var(--text-primary-color)',
              display: 'flex',
            })}
          >
            <HomeItem>
              <img src={homeIco} alt="home ico" />
            </HomeItem>
            <Name>Home</Name>
          </NavLink>
        </NavigationLinkBtn>

        <NavigationLinkBtn>
          <NavLinkBtn
            to="/trends"
            onClick={() => {
              dispatch(reset());
              window.scrollTo(0, 0);
            }}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-active-color)'
                : 'var(--text-primary-color)',
              display: 'flex',
            })}
          >
            <TrendsItem>
              <img src={trendsIco} alt="trends ico" />{' '}
            </TrendsItem>
            <Name>Trends</Name>
          </NavLinkBtn>
        </NavigationLinkBtn>

        <NavigationLinkBtn>
          <NavLink
            to="/favorites"
            onClick={() => {
              dispatch(reset());
              window.scrollTo(0, 0);
            }}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-active-color)'
                : 'var(--text-primary-color)',
              display: 'flex',
            })}
          >
            <FavoritesItem>
              <img src={favoritesIco} alt="favorites ico" />
            </FavoritesItem>
            <Name>Favorites</Name>
          </NavLink>
        </NavigationLinkBtn>

        <NavigationLinkBtn>
          <NavLink
            to="/settingsPage"
            onClick={() => {
              dispatch(reset());
              window.scrollTo(0, 0);
            }}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-active-color)'
                : 'var(--text-primary-color)',
              display: 'flex',
            })}
          >
            <SettingsItem>
              <img src={settingsIco} alt="settings ico" />
            </SettingsItem>
            <Name>Settings</Name>
          </NavLink>
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
  display: block;
  border: none;
  background-color: transparent;

  &:hover {
    color: var(--text-hover-color);
  }
`;

const HomeItem = styled.div`
  padding-left: 3px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  /* &:hover {
    color: var(--text-active-color);
  } */

  img {
    margin-right: 15px;
  }
`;

const TrendsItem = styled.div`
  padding-left: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  /* &:hover {
    color: var(--text-active-color);
  } */

  img {
    margin-right: 19px;
  }
`;
const FavoritesItem = styled.div`
  padding-left: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  /* &:hover {
    color: var(--text-active-color);
  } */

  img {
    margin-right: 20px;
  }
`;
const SettingsItem = styled.div`
  padding-left: 0;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  color: var(--text-primary-color);
  border: none;
  transition: 0.3s;

  /* &:hover {
    color: var(--text-active-color);
  } */

  img {
    margin-right: 15px;
  }
`;

const NavLinkBtn = styled(NavLink)`
  display: flex;
  align-items: center;

  p {
    &:hover {
      color: var(--text-active-color);
    }
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: var(--text-hover-color);
  }
`;
