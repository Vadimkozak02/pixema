import styled from 'styled-components';
import { AuthTemplate } from '../ui/templates/auth-template/auth-template';
import { AuthorizationSuccess } from '../ui/templates/authorization-success-template/authorization-success-template';

export const AuthorizationSuccessPage: React.FC = () => {
  return (
    <SignInWrapper>
      <AuthTemplate
        title={<Title>Success</Title>}
        body={<AuthorizationSuccess />}
      />
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
  margin-bottom: 50px;
`;
