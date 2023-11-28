import styled from 'styled-components';

export const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageWrapper>
      <p>Not found</p>
    </NotFoundPageWrapper>
  );
};

const NotFoundPageWrapper = styled.div`
  background-color: green;
  width: 1200px;
  height: 200px;
  p {
    color: var(--text-primary-color);
  }
`;
