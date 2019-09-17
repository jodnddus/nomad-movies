import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";

import TabNavigation from "./navigation/TabNavigation";

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  handleError = error => console.log(error);
  handleLoaded = () => this.setState({ loaded: true });
  loadAssets = async() => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <TabNavigation />
      )
    } else {
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onError={this.handleError}
          onFinish={this.handleLoaded}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
