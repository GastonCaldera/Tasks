import React from "react";
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
      <BottomNavigationTab title="To Do" />
      <BottomNavigationTab title="completed" />
    </BottomNavigation>
  );
};

export default BottomTabs;
