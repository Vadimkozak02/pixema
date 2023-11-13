import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCurrentPage, getAllPosts } from './all-posts.slice';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../selected-movie/selected-movie.slice';
import { Link, useNavigate } from 'react-router-dom';
import { SearchMenu } from '../search/search-menu';
import spinnerImg from './img/spinner.svg';
import { User } from '../../ui/user/user';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import pointIco from './img/pointIco.svg';

export const AllPosts: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const isLoading = useAppSelector((state) => state.selectedMovie.isLoading);

  const newPosts = useAppSelector((state) => state.allPosts.newPosts);
  const currentPage = useAppSelector((state) => state.allPosts.currentPage);
  console.log('allPosts', allPosts.items);
  // console.log(
  //   'ratingKinopoisk',
  //   allPosts.items.map((el) => el.ratingKinopoisk)
  // );
  // console.log(
  //   'ratingImdb',
  //   allPosts.items.map((el) => el.ratingImdb)
  // );

  useEffect(() => {
    dispatch(getAllPosts({ page: currentPage }));
  }, [dispatch, currentPage]);

  return (
    <AllPostsWrapper>
      <MainTemplate />
      <AllPostContentWrapper>
        <HeaderTemplate />
        <AllPostContent>
          {/* {allPosts.Search?.map((item, index) => (
            <Link to={`/${item.imdbID}`} key={index}>
              <MovieCard
                key={index}
                id={item.imdbID}
                title={item.Title}
                img={<img src={item.Poster} alt="movie" />}
                onClick={() => dispatch(setSelectedMovie(item.imdbID))}
              ></MovieCard>
            </Link>
          ))} */}

          {/* Kinopoisk */}

          {allPosts.items?.map((item, index) => (
            <Link to={`/${item.kinopoiskId}`} key={index}>
              <MovieCard
                key={index}
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
        </AllPostContent>
        <ShowMoreBtn onClick={() => dispatch(changeCurrentPage())}>
          Show more
          <img src={spinnerImg} alt="spinner" />
        </ShowMoreBtn>
      </AllPostContentWrapper>
    </AllPostsWrapper>
  );
};

const AllPostsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
`;

const AllPostContentWrapper = styled.div`
  margin: 25px 0 60px;
`;

const AllPostContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const ShowMoreBtn = styled.button`
  width: 160px;
  line-height: 40px;
  border: none;
  border-radius: 40px;
  background-color: var(--button-showMore-color);
  color: var(--button-text-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: auto;
`;
