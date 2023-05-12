import React from "react";
import { observer } from "mobx-react-lite";
import { BottomNavigationTab, BottomNavigation } from "@ui-kitten/components";
import { BottomNavigationType } from "../../type";

const BottomTabs = ({
  selectedIndex,
  setSelectedIndex,
}: BottomNavigationType): React.ReactElement => {
  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab title="All" />
      <BottomNavigationTab title="completed" />
      <BottomNavigationTab title="To Do" />
    </BottomNavigation>
  );
};

export default observer(BottomTabs);
