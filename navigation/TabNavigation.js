import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { MoviesScreen, SearchScreen, TvScreen } from "../screens";
import { TabBarIcon } from "../components/TabBarIcon";
import { BG_COLOR } from "../constants/Colors";
import { createStack } from "./config";

const TabNavigation = createBottomTabNavigator(
  {
    Movies: {
      screen: createStack(MoviesScreen, "Movie"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS == "ios" ? "ios-film" : "md-film"}
          />
        )
      }
    },
    Tv: {
      screen: createStack(TvScreen, "Tv"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS == "ios" ? "ios-tv" : "md-tv"}
          />
        )
      }
    },
    Search: {
      screen: createStack(SearchScreen, "Search"),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS == "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
