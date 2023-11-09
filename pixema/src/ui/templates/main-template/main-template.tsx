import styled from 'styled-components';
import { SiteLogo } from '../../site-logo/site-logo';
import { SiteMenu } from '../../site-menu/site-menu';
import { SiteRights } from '../../site-rights/site-rights';

export const MainTemplate: React.FC = () => {
  return (
    <>
      <AllPostMenuWrapper>
        <SiteTopWrapper>
          <SiteLogo />
          <SiteMenu />
        </SiteTopWrapper>
        <SiteBottomWrapper>
          <SiteRights />
        </SiteBottomWrapper>
      </AllPostMenuWrapper>
    </>
  );
};

const AllPostMenuWrapper = styled.div`
  min-width: 200px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SiteTopWrapper = styled.div`
  margin-top: 15px;
`;

const SiteBottomWrapper = styled.div`
  margin-bottom: 15px;
`;
