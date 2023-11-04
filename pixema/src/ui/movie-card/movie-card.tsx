import styled from 'styled-components';

type Props = {
  id?: string;
  title: React.ReactNode;
  img: React.ReactNode;
  onClick: () => void;
};

export const MovieCard: React.FC<Props> = ({ id, title, img, onClick }) => {
  return (
    <MovieCardWrapper id={id}>
      <MovieCardImg onClick={() => onClick()}>{img}</MovieCardImg>
      <MovieCardInfoWrapper>
        <MovieCardTitle>
          <MovieCardText>{title}</MovieCardText>
        </MovieCardTitle>
      </MovieCardInfoWrapper>
    </MovieCardWrapper>
  );
};

const MovieCardWrapper = styled.div`
  width: 205px;
  margin: 0 35px 45px 0;
`;

const MovieCardImg = styled.div`
  width: 205px;
  height: 307px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const MovieCardInfoWrapper = styled.div``;

const MovieCardTitle = styled.div``;
const MovieCardText = styled.p`
  color: var(--text-primary-color);
  font-weight: 700;
`;
