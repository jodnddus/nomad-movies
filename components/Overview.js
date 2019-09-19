import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.Text`
  color: white;
`;

const Overview = ({ overview }) => (
  <Container>
    {overview.length > 117 ? `${overview.substring(0, 120)}...` : overview}
  </Container>
);

Overview.propTypes = {
  overview: PropTypes.string.isRequired
};

export default Overview;
