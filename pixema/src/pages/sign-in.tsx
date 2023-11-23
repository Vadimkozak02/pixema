import styled from 'styled-components';
import { AuthTemplate } from '../ui/templates/auth-template/auth-template';
import { SingInForm } from '../features/sign-in-form/sign-in-form';

export const SignIn: React.FC = () => {
  return (
    <SignInWrapper>
      <AuthTemplate title={<Title>Sign In</Title>} body={<SingInForm />} />
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
  margin-bottom: 50px;
`;
