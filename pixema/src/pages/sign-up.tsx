import styled from 'styled-components';
import { AuthTemplate } from '../ui/templates/auth-template/auth-template';
import { SingUpForm } from '../features/sign-up-form/sign-up-form';

export const SignUp: React.FC = () => {
  return (
    <SignInWrapper>
      <AuthTemplate title={<Title>Sign Up</Title>} body={<SingUpForm />} />
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
  margin-bottom: 35px;
`;
