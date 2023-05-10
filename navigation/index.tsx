import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../containers";

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator tabBar={(props) => null}>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
