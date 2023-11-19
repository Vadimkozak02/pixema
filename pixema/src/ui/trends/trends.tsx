import styled from 'styled-components';
import { MainTemplate } from '../templates/main-template/main-template';
import { HeaderTemplate } from '../templates/header-template/header-template';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';
import { setSelectedMovie } from '../../features/selected-movie/selected-movie.slice';
import { allPostsItem } from '../../features/all-posts/types';

export const Trends: React.FC = () => {
  const allPosts = useAppSelector((state) => state.allPosts.allPosts);

  const trendsPosts: allPostsItem = [];
  allPosts.items?.map((el) => {
    if (el.ratingKinopoisk > 7.8 || el.ratingImdb > 7.8) {
      trendsPosts.push(el);
      console.log('el', el);
    }
  });

  const dispatch = useAppDispatch();

  return (
    <TrendsWrapper>
      <MainTemplate />
      <TrendsContentWrapper>
        <HeaderTemplate />
        <TrendsAllPosts>
          {trendsPosts.map((item, index) => (
            <Link to={`/${item.kinopoiskId}`} key={index}>
              <MovieCard
                key={index}
                isAdded={false}
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
        </TrendsAllPosts>
      </TrendsContentWrapper>
    </TrendsWrapper>
  );
};

const TrendsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
`;

const TrendsContentWrapper = styled.div`
  width: 1200px;
  margin: 25px 0 60px;
`;

const TrendsAllPosts = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;
