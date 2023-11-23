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
              genre={el.genres?.map((el) => el.genre + ' ')}
              rating={+el.rating}
              img={<img src={el.posterUrl} alt="movie" />}
              onClick={() => dispatch(setSelectedMovie(el.filmId))}
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
