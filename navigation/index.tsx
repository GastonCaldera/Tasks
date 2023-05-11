import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../containers/Home";
import AboutUs from "../containers/AboutUs";

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
