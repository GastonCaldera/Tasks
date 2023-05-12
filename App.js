import "react-native-gesture-handler";
import React, { useEffect } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import AppNavigator from "./navigation";
import { default as mapping } from "./mapping.json";
import { storeData } from "./utils/function";
import tasks from "./data/task.json";

export default () => {
  useEffect(() => {
    storeData("tasks", tasks);
  }, []);
  return (
    <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
      <AppNavigator />
    </ApplicationProvider>
  );
};
