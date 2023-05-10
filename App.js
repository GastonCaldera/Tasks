import "react-native-gesture-handler";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AppNavigator from "./navigation";
import { default as mapping } from "./mapping.json";

export default () => (
  <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
    <AppNavigator />
  </ApplicationProvider>
);
