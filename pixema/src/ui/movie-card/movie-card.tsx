import styled from 'styled-components';
import { useAppSelector } from '../../hooks';

type Props = {
  id: number;
  title: React.ReactNode;
  genre: React.ReactNode;
  rating: number;
  img: React.ReactNode;
  onClick: () => void;
};

export const MovieCard: React.FC<Props> = ({
  id,
  title,
  genre,
  rating,
  img,
  onClick,
}) => {
  return (
    <MovieCardWrapper id={`${id}`} onClick={() => onClick()}>
      <MovieCardImgWrapper>
        <MovieCardImg>{img}</MovieCardImg>
        <MovieCardRating>{rating ? rating : 7.1}</MovieCardRating>
      </MovieCardImgWrapper>
      <MovieCardInfoWrapper>
        <MovieCardTitle>
          <MovieCardText>{title}</MovieCardText>
          <MovieCardGenre>{genre}</MovieCardGenre>
        </MovieCardTitle>
      </MovieCardInfoWrapper>
    </MovieCardWrapper>
  );
};

const MovieCardWrapper = styled.div`
  width: 205px;
  margin: 0 35px 45px 0;
`;

const MovieCardImgWrapper = styled.div`
  position: relative;
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

const MovieCardRating = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 23px;
  background-color: var(--rating-green-color);
  border-radius: 6px;
  color: var(--text-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieCardTitle = styled.div``;
const MovieCardText = styled.p`
  color: var(--text-primary-color);
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--text-active-color);
  }
`;

const MovieCardGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--text-genre-color);
  font-size: 16px;
  font-weight: 500;
`;
