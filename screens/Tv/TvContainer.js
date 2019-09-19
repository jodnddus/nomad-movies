import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, airingThisWeek, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await tvApi.popular());
      ({
        data: { results: airingThisWeek }
      } = await tvApi.airingThisWeek());
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
        airingThisWeek,
        airingToday
      });
    }
  }

  render() {
    const { loading, airingToday, airingThisWeek, popular } = this.state;
    console.log(this.state);
    return (
      <TvPresenter
        loading={loading}
        airingToday={airingToday}
        airingThisWeek={airingThisWeek}
        popular={popular}
      />
    );
  }
}
