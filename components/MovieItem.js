import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { GREY_COLOR } from "../constants/Colors";
import Overview from "../components/Overview";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: ${props => (!props.big ? "12px" : "14px")};
  margin-vertical: 5px;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.View`
  margin-left: 10px;
  width: 60%;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview
}) =>
  horizontal ? (
    <HContainer>
      <MoviePoster path={posterPhoto} />
      <Column>
        <Title big={true}>{title}</Title>
        <MovieRating votes={voteAvg} />
        <Overview overview={overview} />
      </Column>
    </HContainer>
  ) : (
    <Container>
      <MoviePoster path={posterPhoto} />
      <Title>
        {title.length > 15 ? `${title.substring(0, 12)}...` : title}
      </Title>
      <MovieRating votes={voteAvg} />
    </Container>
  );

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired,
  overview: PropTypes.string
};

export default MovieItem;
