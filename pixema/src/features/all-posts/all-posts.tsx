import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  changeCurrentPage,
  getAllPosts,
  getCurrentScroll,
} from './all-posts.slice';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../selected-movie/selected-movie.slice';
import { Link, useNavigate } from 'react-router-dom';
import { SearchMenu } from '../search/search-menu';
import spinnerImg from './img/spinner.svg';
import { User } from '../user/user';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import pointIco from './img/pointIco.svg';
import { SearchTemplate } from '../../ui/templates/search-template/search-template';
import { ShowMore } from '../show-more-btn/show-more-btn';
import { changeSearchCurrentPage } from '../search/search.slice';
import { getUserLS, setUserLS } from '../../api/user-localStorage';
import { setUser } from '../Auth/authorization.slice';
import { changeFiltersCurrentPage, getFilters } from '../filters/filters.slice';
import { ShowMoreSpinner } from '../../ui/spinner/show-more-spinner';
import { ThreeDotsSpinner } from '../../ui/spinner/three-dots-spinner';

export const AllPosts: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allPosts = useAppSelector((state) => state.allPosts.allPosts);
  let isLoading = useAppSelector((state) => state.allPosts.allPostsIsLoading);
  const currentPage = useAppSelector((state) => state.allPosts.currentPage);

  const searchedMovies = useAppSelector((state) => state.search.searchedPosts);
  const searchedText = useAppSelector((state) => state.search.searchedText);
  const isSearchLoading = useAppSelector(
    (state) => state.search.searchIsLoading
  );

  const filterArr = useAppSelector((state) => state.filter.filtersMovie);
  const filterIsActive = useAppSelector((state) => state.filter.filterIsActive);
  const currentFilters = useAppSelector((state) => state.filter.currentFilters);
  const isFilterLoadinig = useAppSelector(
    (state) => state.filter.isFilterLoading
  );
  const filtersCurrentPage = useAppSelector(
    (state) => state.filter.filtersCurrentPage
  );
  console.log('filtersCurrentPage', filtersCurrentPage);

  let moreThanTotalPages = false;
  if (filterArr.totalPages <= filtersCurrentPage) {
    moreThanTotalPages = true;
  }

  useEffect(() => {
    const LSUser = getUserLS();
    if (LSUser) {
      dispatch(
        setUser({
          email: LSUser.email,
          token: LSUser.token,
          id: LSUser.id,
          colorMode: LSUser.colorMode,
        })
      );
    }
  }, [dispatch, currentPage]);

  let currentScroll = useAppSelector((state) => state.allPosts.currentScroll);

  if (allPosts.items.length === 0) {
    dispatch(getAllPosts({ page: 1 }));
  }

  return (
    <AllPostsWrapper>
      <MainTemplate />
      <AllPostContentWrapper>
        <HeaderTemplate />
        <AllPostContent
        // style={{
        //   display: searchedMovies.films.length === 0 ? 'flex' : 'none',
        // }}
        >
          {/* {allPosts.items?.map((item, index) => (
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
          ))} */}

          {isLoading || isFilterLoadinig || isSearchLoading ? (
            <ThreeDotsSpinner />
          ) : (
            <>
              {searchedMovies.films.length === 0 ? (
                <>
                  {searchedMovies.searchFilmsCountResult === 0 &&
                  searchedText.length > 0 ? (
                    <div
                      style={{
                        color: 'var(--text-primary-color)',
                        fontSize: '18px',
                        fontWeight: '600',
                        marginBottom: '40px',
                      }}
                    >
                      No movies were found for this request
                    </div>
                  ) : (
                    <>
                      {filterArr.items.length > 0 ? (
                        <>
                          {filterArr.items?.map((item, index) => (
                            <Link to={`/${item.kinopoiskId}`} key={index}>
                              <MovieCard
                                key={index}
                                isAdded={false}
                                id={item.kinopoiskId}
                                title={item.nameRu}
                                genre={item.genres.map(
                                  (el) => ' - ' + el.genre
                                )}
                                rating={
                                  item.ratingKinopoisk === null
                                    ? item.ratingImdb
                                    : item.ratingKinopoisk
                                }
                                img={<img src={item.posterUrl} alt="movie" />}
                                onClick={() => {
                                  dispatch(setSelectedMovie(item.kinopoiskId));
                                  window.scrollTo(0, 0);
                                }}
                                removeFromFav={() => null}
                              ></MovieCard>
                            </Link>
                          ))}
                        </>
                      ) : (
                        <>
                          {allPosts.items?.map((item, index) => (
                            <Link to={`/${item.kinopoiskId}`} key={index}>
                              <MovieCard
                                key={index}
                                isAdded={false}
                                id={item.kinopoiskId}
                                title={item.nameRu}
                                genre={item.genres.map(
                                  (el) => ' - ' + el.genre
                                )}
                                rating={
                                  item.ratingKinopoisk === null
                                    ? item.ratingImdb
                                    : item.ratingKinopoisk
                                }
                                img={<img src={item.posterUrl} alt="movie" />}
                                onClick={() => {
                                  dispatch(setSelectedMovie(item.kinopoiskId));
                                  window.scrollTo(0, 0);
                                }}
                                removeFromFav={() => null}
                              ></MovieCard>
                            </Link>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <SearchTemplate
                  movie={searchedMovies}
                  searchedString={searchedText}
                ></SearchTemplate>
              )}
            </>
          )}
        </AllPostContent>
        {/* <ShowMore changeCurrentPage={changeCurrentPage} /> */}
        <ShowMoreBtn
          style={{
            display:
              searchedMovies.films.length > 0 ||
              isLoading ||
              isFilterLoadinig ||
              isSearchLoading
                ? 'none'
                : 'flex',
          }}
          onClick={
            filterIsActive
              ? () => {
                  dispatch(changeFiltersCurrentPage());
                  dispatch(
                    getFilters({
                      order: currentFilters.order,
                      keyword: currentFilters.keyword,
                      ratingFrom: currentFilters.ratingFrom,
                      ratingTo: currentFilters.ratingTo,
                      yearFrom: currentFilters.yearFrom,
                      yearTo: currentFilters.yearTo,
                      page: filtersCurrentPage,
                    })
                  );
                }
              : () => {
                  dispatch(changeCurrentPage());
                  dispatch(getAllPosts({ page: currentPage }));
                  dispatch(getCurrentScroll());
                  window.scrollTo({
                    top: currentScroll,
                    left: 0,
                    behavior: 'smooth',
                  });
                }
          }
        >
          Show more
          {isLoading ? (
            <ShowMoreSpinner />
          ) : (
            <img src={spinnerImg} alt="spinner" />
          )}
        </ShowMoreBtn>
      </AllPostContentWrapper>
    </AllPostsWrapper>
  );
};

const AllPostsWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
  min-height: 1400px;
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
