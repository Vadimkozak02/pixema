import styled from 'styled-components';
import {
  SearchResponse,
  SearchResponseFilms,
} from '../../../features/search/types';
import { MovieCard } from '../../movie-card/movie-card';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { setSelectedMovie } from '../../../features/selected-movie/selected-movie.slice';
import { reset } from '../../../features/search/search.slice';
import dotIco from './img/dotIco.svg';

type Props = {
  movie: SearchResponse;
  searchedString: string;
};

export const SearchTemplate: React.FC<Props> = ({ movie, searchedString }) => {
  const dispatch = useAppDispatch();
  return (
    <SearchTemplateWrapper>
      {!!movie.films.length &&
        movie.films?.map((el, index) => (
          <Link
            to={`/${el.filmId}`}
            key={index}
            onClick={() => dispatch(reset())}
          >
            <MovieCard
              key={index}
              isAdded={false}
              id={el.filmId}
              title={el.nameRu}
              genre={el.genres?.map((el, index) =>
                el.genre !== el.genre[el.genre.length - 1] ? (
                  <SearchGenre key={index}>
                    <div style={{ marginRight: '5px' }}>{el.genre}</div>
                    <img src={dotIco} alt="dot" />
                  </SearchGenre>
                ) : (
                  el.genre
                )
              )}
              rating={+el.rating}
              img={<img src={el.posterUrl} alt="movie" />}
              onClick={() => dispatch(setSelectedMovie(el.filmId))}
              removeFromFav={() => null}
            ></MovieCard>
          </Link>
        ))}
      {!movie.films.length && searchedString && <div>Posts not found</div>}
    </SearchTemplateWrapper>
  );
};

const SearchTemplateWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const SearchGenre = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
