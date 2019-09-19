import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../components/Loader";
import Section from "../../components/Section";
import { BG_COLOR } from "../../constants/Colors";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TvPresenter = ({ loading, airingThisWeek, popular, airingToday }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular">
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {airingThisWeek ? (
        <Section title="Airing This Week">
          {airingThisWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TvPresenter;
