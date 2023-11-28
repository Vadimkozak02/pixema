import styled from 'styled-components';
import { Button } from '../../button/button';
import { useNavigate } from 'react-router-dom';

export const AuthorizationSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AuthorizationSuccessWrapper>
      <AuthorizationSuccessText>
        <p>Your registration is now completed</p>
      </AuthorizationSuccessText>
      <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
    </AuthorizationSuccessWrapper>
  );
};

const AuthorizationSuccessWrapper = styled.div`
  width: 410px;
  margin: auto;
`;

const AuthorizationSuccessText = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary-color);
  }
`;
