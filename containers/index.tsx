import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Layout, ViewPager } from "@ui-kitten/components";
import BottomTabs from "../components/BottomTabs";
import TaskComponent from "../components/TaskComponent";
import jsontTasks from "../data/task.json";
import { sleep } from "../utils/function";

const Dashboard = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tasks, setTasks] = useState(jsontTasks);
  const handleDelete = (id) => {
    const newState = tasks.filter((element) => element.id !== id);
    sleep(500).then(() => {
      setTasks(newState);
    });
  };
  const handleDone = (id) => {
    const newState = tasks.map((element) => {
      if (element.id === id) {
        return { ...element, status: "complete" };
      }
      return element;
    });
    sleep(500).then(() => {
      setTasks(newState);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={styles.tab}
      >
        <Layout style={styles.tab} level="2">
          <TaskComponent
            tasks={tasks}
            handleDelete={(id) => {
              handleDelete(id);
            }}
            handleDone={(id) => {
              handleDone(id);
            }}
          />
        </Layout>
        <Layout style={styles.tab} level="2">
          <TaskComponent
            tasks={tasks.filter((element) => element.status === "pending")}
            handleDelete={(id) => {
              handleDelete(id);
            }}
            handleDone={(id) => {
              handleDone(id);
            }}
          />
        </Layout>
        <Layout style={styles.tab} level="2">
          <TaskComponent
            tasks={tasks.filter((element) => element.status === "complete")}
            handleDelete={(id) => {
              handleDelete(id);
            }}
            handleDone={(id) => {
              handleDone(id);
            }}
          />
        </Layout>
      </ViewPager>
      <BottomTabs
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </SafeAreaView>
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
