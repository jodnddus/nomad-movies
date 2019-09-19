import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.Text`
  color: white;
  font-size: 12px;
  margin-vertical: 10px;
`;

const Overview = ({ overview }) => (
  <Container>
    {overview.length > 150 ? `${overview.substring(0, 147)}...` : overview}
  </Container>
);

Overview.propTypes = {
  overview: PropTypes.string.isRequired
};

export default Overview;
