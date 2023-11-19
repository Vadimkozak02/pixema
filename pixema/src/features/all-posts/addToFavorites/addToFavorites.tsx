import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { MovieCard } from '../../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../../selected-movie/selected-movie.slice';

export const AddToFavorites: React.FC = () => {
  const favoritesMovie = useAppSelector(
    (state) => state.addToFav.arrofFavoritesMovie
  );
  const allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const dispatch = useAppDispatch();

  let isTrue = false;
  allPosts.items?.map((el) => {
    favoritesMovie.map((item) => {
      if (el.kinopoiskId === item.kinopoiskId) {
        isTrue = true;
      }
    });
  });
  return (
    <>
      {favoritesMovie.map((item, index) => (
        <Link to={`/${item.kinopoiskId}`} key={index}>
          <MovieCard
            key={index}
            isAdded={isTrue}
            id={item.kinopoiskId}
            title={item.nameRu}
            genre={item.genres.map((el) => ' - ' + el.genre)}
            rating={
              item.ratingKinopoisk === null
                ? item.ratingImdb
                : item.ratingKinopoisk
            }
            img={<img src={item.posterUrl} alt="movie" />}
            onClick={() => dispatch(setSelectedMovie(item.kinopoiskId))}
          ></MovieCard>
        </Link>
      ))}
    </>
  );
};
