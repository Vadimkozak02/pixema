import styled from 'styled-components';
import authBg from './auth-img/auth-bg.png';
import { SiteLogo } from '../../site-logo/site-logo';

type Props = {
  title?: React.ReactNode;
  body: React.ReactNode;
};

export const AuthTemplate: React.FC<Props> = ({ title, body }) => {
  return (
    <>
      <AuthTemplateWrapper>
        <SiteLogoWrapper>
          <SiteLogo />
        </SiteLogoWrapper>

        <SiteLogoBg>
          <img src={authBg} alt="movie"></img>
        </SiteLogoBg>
        <Main>
          <TitleContainer>{title}</TitleContainer>
          <BodyContainer>{body}</BodyContainer>
        </Main>
        <Footer>
          <p>© All Rights Reserved</p>
        </Footer>
      </AuthTemplateWrapper>
    </>
  );
};

const AuthTemplateWrapper = styled.div`
  /* position: relative; */
`;

const SiteLogoWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 50px;
  z-index: 100;
`;

const SiteLogoBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & img {
    width: 100%;
  }
`;

const Main = styled.div`
  position: relative;
  width: 500px;
  /* height: 540px; */
  background-color: var(--form-background-color);
  margin: 100px auto 20px;
  border-radius: 10px;
  padding: 30px 20px;
`;

const TitleContainer = styled.div`
  width: 410px;
  margin: auto;
`;

const BodyContainer = styled.div`
  width: 410px;
  margin: auto;
`;

const Footer = styled.div`
  position: absolute;
  bottom: -80px;
  width: 158px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);

  p {
    color: var(--text-primary-color);
  }
`;
