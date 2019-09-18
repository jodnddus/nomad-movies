import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, topRated, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await tvApi.popular());
      ({
        data: { results: topRated }
      } = await tvApi.topRated());
      ({
        data: { results: airingToday }
      } = await tvApi.airingToday());
    } catch (error) {
      console.log(error);
      error = "Can't get Tv";
    } finally {
      this.setState({
        loading: false,
        error,
        popular,
        topRated,
        airingToday
      });
    }
  }

  render() {
    const { loading, airingToday, topRated, popular } = this.state;
    console.log(this.state);
    return (
      <TvPresenter
        loading={loading}
        airingToday={airingToday}
        topRated={topRated}
        popular={popular}
      />
    );
  }
}
