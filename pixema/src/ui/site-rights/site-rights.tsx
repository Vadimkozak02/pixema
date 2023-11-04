import styled from 'styled-components';

export const SiteRights: React.FC = () => {
  return (
    <SiteRightsWrapper>
      <p>© All Rights Reserved</p>
    </SiteRightsWrapper>
  );
};

const SiteRightsWrapper = styled.div`
  p {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-secondary-color);
  }
`;
