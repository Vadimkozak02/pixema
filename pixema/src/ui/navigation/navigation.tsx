import styled from 'styled-components';
import homeIco from './img/site-menu-home.png';
import trendsIco from './img/site-menu-trends.png';
import favoritesIco from './img/site-menu-favorites.png';
import settingsIco from './img/site-menu-settings.png';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { reset } from '../../features/search/search.slice';
import burgerMenu from './img/burgerMenu.svg';
import { useEffect } from 'react';
import { setIsOpen } from './navigation.slice';

export const Navigation: React.FC = () => {
  const isOpen = useAppSelector((state) => state.navigation.isOpen);

  const dispatch = useAppDispatch();

  return (
    <>
      <NavigationWrapper
        style={{
          transform: isOpen ? 'translateX(-10px)' : 'translateX(0)',
          right: isOpen ? '25px' : '-300px',
          // visibility: isOpen ? 'visible' : 'hidden',
          // opacity: isOpen ? '1' : '0',
        }}
      >
        <NavigationList>
          <NavigationLinkBtn>
            <NavLink
              to="/"
              onClick={() => {
                dispatch(reset());
                window.scrollTo(0, 0);
                dispatch(setIsOpen(false));
              }}
              style={({ isActive }) => ({
                color: isActive
                  ? 'var(--navigation-active-color)'
                  : 'var(--navigation-default-color)',
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
                dispatch(setIsOpen(false));
              }}
              style={({ isActive }) => ({
                color: isActive
                  ? 'var(--navigation-active-color)'
                  : 'var(--navigation-default-color)',
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
                dispatch(setIsOpen(false));
              }}
              style={({ isActive }) => ({
                color: isActive
                  ? 'var(--navigation-active-color)'
                  : 'var(--navigation-default-color)',
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
                dispatch(setIsOpen(false));
              }}
              style={({ isActive }) => ({
                color: isActive
                  ? 'var(--navigation-active-color)'
                  : 'var(--navigation-default-color)',
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
      {/* <SiteBurgerWrapper
        onClick={() => {
          dispatch(setIsOpen(!isOpen));
        }}
      >
        <img src={burgerMenu} alt="open menu" />
      </SiteBurgerWrapper> */}
    </>
  );
};

const NavigationWrapper = styled.div`
  display: block;

  @media (max-width: 980px) {
    position: absolute;
    width: 13%;
    height: 100%;
    top: 0;
    right: -300px;
    z-index: 10;
    padding: 105px 40px 30px 25px;
    background-color: var(--site-background-color);
    overflow: hidden;
    transition: 0.3s;
    transform: translateX(10px);
  }
`;

const NavigationList = styled.div`
  padding-left: 0;
`;

const NavigationLinkBtn = styled.button`
  display: block;
  border: none;
  background-color: transparent;

  &:hover {
    /* color: var(--text-hover-color); */
    color: #00801100;
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

  /* p {
    &:hover {
      color: var(--navigation-active-color);
    }
  } */
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: var(--navigation-hover-color);
  }
`;

// const SiteBurgerWrapper = styled.button`
//   width: 58px;
//   height: 58px;
//   background-color: var(--button-bg-primary-color);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   border: transparent;
//   cursor: pointer;
//   transition: 0.3s;
//   display: none;

//   img {
//     width: 100%;
//     height: 100%;
//     padding-top: 1px;
//   }

//   &:hover {
//     background-color: var(--button-bg-hover-color);
//   }

//   &:active {
//     transform: scale(0.98);
//   }

//   @media (max-width: 980px) {
//     display: block;
//   }
// `;
