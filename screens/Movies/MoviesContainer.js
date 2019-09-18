import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi } from "../../api";

export default class MoviesContainer extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null,
    error: null
  };

  async componentDidMount() {
    let upcoming, popular, nowPlaying, error;
    try {
      ({
        data: { results: upcoming }
      } = await moviesApi.upcoming());
      ({
        data: { results: popular }
      } = await moviesApi.popular());
      ({
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying());
    } catch (error) {
      console.log(error);
      error = "Can't get Movies.";
    } finally {
      this.setState({ loading: false, error, upcoming, popular, nowPlaying });
    }
  }
  render() {
    const { loading, popular, nowPlaying, upcoming } = this.state;
    console.log(this.state);
    return (
      <MoviesPresenter
        loading={loading}
        popular={popular}
        nowPlaying={nowPlaying}
        upcoming={upcoming}
      />
    );
  }
}
