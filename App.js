import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Routes } from "./src/routeConfig";

const navigator = createStackNavigator(Routes, {
  initialRouteName: Object.keys(Routes)[0],
  defaultNavigationOptions: {
    title: "App",
  },
});

export default createAppContainer(navigator);
