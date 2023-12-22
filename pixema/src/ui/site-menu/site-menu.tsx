import styled from 'styled-components';
import homeImg from './img/site-menu-home.png';
import trendsImg from './img/site-menu-trends.png';
import favoritesImg from './img/site-menu-favorites.png';
import settingsImg from './img/site-menu-settings.png';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveTab } from './site-menu.slice';
import { SiteItem } from './site-item';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SiteMenu: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    { id: '1', title: 'Home', img: homeImg },
    { id: '2', title: 'Trends', img: trendsImg },
    { id: '3', title: 'Favorites', img: favoritesImg },
    { id: '4', title: 'Settings', img: settingsImg },
  ];

  const dispatch = useAppDispatch();
  const activeId = useAppSelector((state) => state.tabsMenu.activeTab) || '1';

  // useEffect(() => {
  //   if (activeId === '3') {
  //     navigate('/favorites');
  //   }
  // }, [navigate, activeId]);

  // if (activeId === '1') {
  //   navigate('/');
  // }

  // if (activeId === '3') {
  //   navigate('/favorites');
  // }

  return (
    <>
      <SiteMenuWrapper>
        <>
          {items.map(({ id, title, img }) => (
            <SiteItem
              key={id}
              title={title}
              image={<img src={img} alt="img"></img>}
              setActive={() => dispatch(setActiveTab(id))}
              active={activeId === id}
            ></SiteItem>
          ))}
        </>
      </SiteMenuWrapper>
    </>
  );
};

const SiteMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 216px;
  justify-content: space-between;
`;
