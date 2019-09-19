import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../../components/Loader';
import MovieSlider from '../../components/MovieSlider';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';

const Container = styled.ScrollView`
  background-color: black;
`;

const MoviesPresenter = ({
  loading, upcoming, popular, nowPlaying,
}) => (loading ? (
  <Loader />
) : (
  <Container>
    {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
    {upcoming ? (
      <Section movies={upcoming} title="Upcoming Movies">
        {upcoming
          .filter((movie) => movie.poster_path !== null)
          .map((movie) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              posterPhoto={movie.poster_path}
              title={movie.title}
              voteAvg={movie.vote_average}
            />
          ))}
      </Section>
    ) : null}
    {popular ? (
      <Section horizontal={false} movies={upcoming} title="Popular Movies">
        {popular
          .filter((movie) => movie.poster_path !== null)
          .map((movie) => (
            <MovieItem
              horizontal
              key={movie.id}
              id={movie.id}
              posterPhoto={movie.poster_path}
              title={movie.title}
              voteAvg={movie.vote_average}
              overview={movie.overview}
            />
          ))}
      </Section>
    ) : null}
  </Container>
));

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.arrayOf.isRequired,
  popular: PropTypes.arrayOf.isRequired,
  nowPlaying: PropTypes.arrayOf.isRequired,
};

export default MoviesPresenter;
