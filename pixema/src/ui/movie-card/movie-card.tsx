import styled from 'styled-components';
import { useAppSelector } from '../../hooks';

type Props = {
  id?: string;
  title: React.ReactNode;
  img: React.ReactNode;
  onClick: () => void;
};

export const MovieCard: React.FC<Props> = ({ id, title, img, onClick }) => {
  return (
    <MovieCardWrapper id={id} onClick={() => onClick()}>
      <MovieCardImg>{img}</MovieCardImg>
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
  cursor: pointer;

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
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--text-acctive-color);
  }
`;
