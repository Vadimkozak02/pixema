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
      <AllPostHeaderWrapperMobile>
        <SiteLogoWrap>
          <SiteLogo />
          <User />
          {/* <Navigation /> */}
        </SiteLogoWrap>
        <SearchMenu />
      </AllPostHeaderWrapperMobile>
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
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 600px;
    margin-bottom: 10px;
    margin: 0 auto;
  }

  @media (max-width: 645px) {
    display: none;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

const SiteLogoWrap = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: block;
  }

  @media (max-width: 645px) {
    display: flex;
    width: 375px;
    justify-content: space-between;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    width: 320px;
  }

  @media (max-width: 320px) {
    display: flex;
    width: 272px;
    justify-content: space-between;
  }
`;

const AllPostHeaderWrapperMobile = styled.div`
  display: none;

  @media (max-width: 645px) {
    display: block;
  }

  @media (max-width: 320px) {
    display: block;
  }
`;
