import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SelectedMovieTemplate } from '../../ui/templates/selected-movie-templates/selected-movie-template';
import { MainTemplate } from '../../ui/templates/main-template/main-template';
import { HeaderTemplate } from '../../ui/templates/header-template/header-template';
import { MovieCard } from '../../ui/movie-card/movie-card';
import { setSelectedMovie } from './selected-movie.slice';
import { useEffect } from 'react';

export const SelectedMovie: React.FC = () => {
  const selectedPost = useAppSelector(
    (state) => state.selectedMovie.selectedMovie
  );

  const allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const dispatch = useAppDispatch();
  console.log('selected', selectedPost);
  // const searchArr = allPosts.Search;
  // console.log('searchArr', searchArr);
  // const index = searchArr.findIndex((el) => el.imdbID === selectedPost.imdbID);
  // console.log('index', index);
  // const postsWithoutSelected = searchArr.splice(index, 1);
  // console.log('without', postsWithoutSelected);

  // useEffect(() => {

  // })

  return (
    <SelectedMovieWrapper>
      <MainTemplate />
      <SelectedMovieContentWrapper>
        <HeaderTemplate />
        <SelectedMovieTemplate
          img={<img src={selectedPost.Poster} alt="movieImg" />}
          genre={selectedPost.Genre}
          title={selectedPost.Title}
          description={selectedPost.Plot}
          rating={selectedPost.imdbRating}
          runtime={selectedPost.Runtime}
          year={selectedPost.Year}
          released={selectedPost.Released}
          boxOffice={selectedPost.BoxOffice}
          country={selectedPost.Country}
          production={selectedPost.Production}
          actors={selectedPost.Actors}
          director={selectedPost.Director}
          writers={selectedPost.Writer}
          leftTap={() => console.log('left')}
          rightTap={() => console.log('right')}
          recommendationMovie={allPosts.Search?.map((item, index) => (
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
        ></SelectedMovieTemplate>
      </SelectedMovieContentWrapper>
    </SelectedMovieWrapper>
  );
};

const SelectedMovieWrapper = styled.div`
  display: flex;
  background-color: var(--site-background-color);
  padding-left: 50px;
`;

const SelectedMovieContentWrapper = styled.div`
  width: 1200px;
  margin: 25px 0 60px;
`;
