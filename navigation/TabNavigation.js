import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { MoviesScreen, DetailScreen, SearchScreen, TvScreen } from "../screens";

const TabNavigation = createBottomTabNavigator({
    Movies: MoviesScreen,
    Search: SearchScreen,
    Tv: TvScreen
});

export default createAppContainer(TabNavigation);