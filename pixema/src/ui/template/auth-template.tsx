import styled from 'styled-components';
import authBg from './auth-img/auth-bg.png';

type Props = {
  title?: React.ReactNode;
  body: React.ReactNode;
};

export const AuthTemplate: React.FC<Props> = ({ title, body }) => {
  return (
    <>
      <AuthTemplateWrapper>
        <SiteLogo>
          <img src={authBg} alt="movie"></img>
        </SiteLogo>
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

const AuthTemplateWrapper = styled.div``;
const SiteLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & img {
    width: 100%;
  }
`;

const Main = styled.div`
  position: relative;
  width: 575px;
  height: 540px;
  background-color: var(--form-background-color);
  margin: 100px auto 0;
  border-radius: 10px;
`;

const TitleContainer = styled.div`
  width: 495px;
  margin: auto;
`;

const BodyContainer = styled.div`
  width: 495px;
  margin: auto;
`;

const Footer = styled.div`
  position: relative;
  width: 158px;
  margin: auto;
`;
