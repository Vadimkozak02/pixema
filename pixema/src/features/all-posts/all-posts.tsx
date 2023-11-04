import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAllPosts } from './all-posts.slice';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from '../selected-movie/selected-movie.slice';
import { useNavigate } from 'react-router-dom';
import { SiteLogo } from '../../ui/site-logo/site-logo';
import { SiteMenu } from '../../ui/site-menu/site-menu';
import { SiteRights } from '../../ui/site-rights/site-rights';
import { SearchMenu } from '../search/search-menu';
import spinnerImg from './img/spinner.svg';
import { User } from '../../ui/user/user';

export const AllPosts: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const isLoading = useAppSelector((state) => state.selectedMovie.isLoading);

  useEffect(() => {
    dispatch(getAllPosts({ pages: [1, 2] }));
    if (isLoading) {
      navigate('/posts/selectedPost');
    }
  }, [dispatch, isLoading, navigate]);

  return (
    <AllPostsWrapper>
      <AllPostMenuWrapper>
        <SiteTopWrapper>
          <SiteLogo />
          <SiteMenu />
        </SiteTopWrapper>
        <SiteBottomWrapper>
          <SiteRights />
        </SiteBottomWrapper>
      </AllPostMenuWrapper>
      <AllPostContentWrapper>
        <AllPostHeaderWrapper>
          <SearchMenu />
          <User name="Vadim Kozak" />
        </AllPostHeaderWrapper>
        <AllPostContent>
          {allPosts.Search?.map((item, index) => (
            <MovieCard
              key={index}
              id={item.imdbID}
              title={item.Title}
              img={<img src={item.Poster} alt="movie" />}
              onClick={() =>
                dispatch(setSelectedMovie({ imdbID: item.imdbID }))
              }
            ></MovieCard>
          ))}
        </AllPostContent>
        <ShowMoreBtn onClick={() => console.log('show more')}>
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

const AllPostMenuWrapper = styled.div`
  min-width: 200px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SiteTopWrapper = styled.div`
  margin-top: 15px;
`;
const SiteBottomWrapper = styled.div`
  margin-bottom: 15px;
`;

const AllPostContentWrapper = styled.div`
  margin: 25px 0 60px;
`;

const AllPostHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
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
