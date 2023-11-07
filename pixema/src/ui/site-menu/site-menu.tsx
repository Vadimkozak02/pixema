import styled from 'styled-components';
import homeImg from './img/site-menu-home.png';
import trendsImg from './img/site-menu-trends.png';
import favoritesImg from './img/site-menu-favorites.png';
import settingsImg from './img/site-menu-settings.png';

export const SiteMenu: React.FC = () => {
  return (
    <SiteMenuWrapper>
      <SiteMenuList>
        <SiteMenuItem>
          <SiteMenuImg src={homeImg} alt="home" />
          <SiteMenuText>home</SiteMenuText>
        </SiteMenuItem>
        <SiteMenuItem>
          <SiteMenuImg src={trendsImg} alt="trends" />
          <SiteMenuText>trends</SiteMenuText>
        </SiteMenuItem>
        <SiteMenuItem>
          <SiteMenuImg src={favoritesImg} alt="favorites" />
          <SiteMenuText>favorites</SiteMenuText>
        </SiteMenuItem>
        <SiteMenuItem>
          <SiteMenuImg src={settingsImg} alt="setting" />
          <SiteMenuText>setting</SiteMenuText>
        </SiteMenuItem>
      </SiteMenuList>
    </SiteMenuWrapper>
  );
};

const SiteMenuWrapper = styled.div``;
const SiteMenuList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 0 0 0 5px;
    &:last-child {
      padding: 0;
    }
  }
`;
const SiteMenuItem = styled.li`
  display: flex;
  align-items: center;
`;

const SiteMenuImg = styled.img`
  cursor: pointer;
  margin-right: 15px;
`;

const SiteMenuText = styled.p`
  cursor: pointer;
  text-align: end;
  text-transform: capitalize;
  color: var(--text-secondary-color);
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: var(--text-acctive-color);
  }
`;
