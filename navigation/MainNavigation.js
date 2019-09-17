import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TabNavigation from "./TabNavigation";
import { DetailScreen }from "../screens";

const MainNavigation = createStackNavigator(
    {
        Tabs: { screen: TabNavigation, navigationOptions: { header: null }},
        Detail: DetailScreen
    },
    {
        
    }
);

export default createAppContainer(MainNavigation);