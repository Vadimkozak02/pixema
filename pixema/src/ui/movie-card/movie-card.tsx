import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import favAcitveIco from './img/favAcitveIco.svg';

type Props = {
  id: number;
  title: React.ReactNode;
  genre: React.ReactNode;
  rating: number;
  img: React.ReactNode;
  isAdded: boolean;
  onClick: () => void;
  removeFromFav: () => void;
};

export const MovieCard: React.FC<Props> = ({
  id,
  title,
  genre,
  rating,
  img,
  isAdded,
  onClick,
  removeFromFav,
}) => {
  return (
    <MovieCardWrapper id={`${id}`} onClick={() => onClick()}>
      <MovieCardImgWrapper>
        <MovieCardImg>
          {img}
          <AddedToFavorite
            style={{
              transform: isAdded ? 'translateY(10px)' : 'translateY(0)',
              visibility: isAdded ? 'visible' : 'hidden',
              opacity: isAdded ? '1' : '0',
            }}
            onClick={(event) => {
              removeFromFav();
              event.stopPropagation();
              event.preventDefault();
            }}
          >
            <img src={favAcitveIco} alt="added to favorites" />
          </AddedToFavorite>
        </MovieCardImg>
        <MovieCardRating
        // style={{
        //   backgroundColor:
        //     rating > 7
        //       ? 'var(--rating-green-color)'
        //       : 'var(--rating-yellow-color)',
        // }}
        >
          {rating ? rating : 7.1}
        </MovieCardRating>
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

const AddedToFavorite = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 28px;
  background-color: var(--button-showMore-color);
  border: var(--input-border-color);
  border-right: 1px solid var(--site-background-color);
  border-radius: 6px;
  opacity: 0;
  transition: 0.3s;
  transform: translateY(-10px);
  visibility: hidden;

  img {
    width: 12px;
    opacity: 0.6;
    transition: 0.3s;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

const MovieCardInfoWrapper = styled.div``;

const MovieCardRating = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 23px;
  border-radius: 6px;
  color: var(--text-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--rating-green-color);
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
