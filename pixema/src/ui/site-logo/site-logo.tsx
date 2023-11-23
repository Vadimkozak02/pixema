import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { reset } from '../../features/search/search.slice';
import { useAppDispatch } from '../../hooks';

export const SiteLogo: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <LogoLink to="/" onClick={() => dispatch(reset())}>
      <SiteLogoWrapper>
        <SiteNameStart>pix</SiteNameStart>
        <SiteNameEnd>ema</SiteNameEnd>
      </SiteLogoWrapper>
    </LogoLink>
  );
};

const LogoLink = styled(Link)`
  cursor: pointer;
`;

const SiteLogoWrapper = styled.div`
  max-width: 158px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.3s;

  &:active {
    transform: scale(0.98);
  }
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
