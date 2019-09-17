import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { MoviesScreen, SearchScreen, TvScreen } from "../screens";
import { TabBarIcon } from '../components/TabBarIcon';
import { BG_COLOR } from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
    {
    Movies: { 
        screen: MoviesScreen,
        navigationOptions: {
            tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={Platform.OS == "ios" ? "ios-film" : "md-film"} />
        }
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={Platform.OS == "ios" ? "ios-tv" : "md-tv"}/>
        }
    },
    Tv: { 
        screen: TvScreen, 
        navigationOptions: {
            tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={Platform.OS == "ios" ? "ios-search" : "md-search"}/>
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
});

export default createAppContainer(TabNavigation);