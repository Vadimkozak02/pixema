import styled from 'styled-components';

export const SiteLogo: React.FC = () => {
  return (
    <SiteLogoWrapper>
      <SiteNameStart>pix</SiteNameStart>
      <SiteNameEnd>ema</SiteNameEnd>
    </SiteLogoWrapper>
  );
};

const SiteLogoWrapper = styled.div`
  max-width: 158px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
const SiteNameStart = styled.h1`
  font-size: 46px;
  color: var(--site-logo-color);
  margin: 0;
`;
const SiteNameEnd = styled.h1`
  font-size: 46px;
  color: var(--site-logo-secColor);
  margin: 0;
`;
