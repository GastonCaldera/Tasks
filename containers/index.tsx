import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Layout, ViewPager } from "@ui-kitten/components";
import BottomTabs from "../components/BottomTabs";
import TaskComponent from "../components/TaskComponent";
import jsontTasks from "../data/task.json";

const Dashboard = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tasks, setTasks] = useState(jsontTasks);
  return (
    <View style={styles.container}>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={styles.tab}
      >
        <Layout style={styles.tab} level="2">
          <TaskComponent tasks={tasks} />
        </Layout>
        <Layout style={styles.tab} level="2">
          <TaskComponent
            tasks={tasks.filter((element) => element.status === "pending")}
          />
        </Layout>
        <Layout style={styles.tab} level="2">
          <TaskComponent
            tasks={tasks.filter((element) => element.status === "complete")}
          />
        </Layout>
      </ViewPager>
      <BottomTabs
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    flex: 1,
  },
});

export default Dashboard;
