import styled from 'styled-components';
import { SearchMenu } from '../../../features/search/search-menu';
import { User } from '../../../features/user/user';
import { SiteLogo } from '../../site-logo/site-logo';
import { Navigation } from '../../navigation/navigation';
import { useAppSelector } from '../../../hooks';

export const HeaderTemplate: React.FC = () => {
  const isOpen = useAppSelector((state) => state.navigation.isOpen);

  return (
    <>
      <AllPostHeaderWrapper>
        <SiteLogoWrap>
          <SiteLogo />
          <Navigation />
        </SiteLogoWrap>
        <SearchMenu />
        <User />
      </AllPostHeaderWrapper>
    </>
  );
};

const AllPostHeaderWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 1500px) {
    width: 690px;

    justify-content: flex-start;
  }

  @media (max-width: 980px) {
    justify-content: space-between;
  }
`;

const SiteLogoWrap = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: block;
  }
`;
