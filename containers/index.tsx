import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Layout, ViewPager, Spinner } from "@ui-kitten/components";
import BottomTabs from "../components/BottomTabs";
import TaskComponent from "../components/TaskComponent";
import jsontTasks from "../data/task.json";
import { sleep } from "../utils/function";

const Dashboard = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tasks, setTasks] = useState(jsontTasks);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const handleDelete = (id) => {
    const newState = tasks.filter((element) => element.id !== id);
    sleep(500).then(() => {
      setTasks(newState);
      setIsloading(false);
    });
  };

  const handleDone = (id, status) => {
    const newState = tasks.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          status: status === "complete" ? "pending" : "complete",
        };
      }
      return element;
    });
    sleep(500).then(() => {
      setTasks(newState);
      setIsloading(false);
    });
  };

  useEffect(() => {
    setPendingTasks(tasks.filter((element) => element.status === "pending"));
    setCompleteTasks(tasks.filter((element) => element.status === "complete"));
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Spinner size={"galactic"} />
        </View>
      ) : (
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          style={styles.tab}
          swipeEnabled={false}
        >
          <Layout style={styles.tab} level="2">
            <TaskComponent
              tasks={tasks}
              handleDelete={(id) => {
                handleDelete(id);
              }}
              handleDone={(id, status) => {
                handleDone(id, status);
              }}
              setIsloading={() => {
                setIsloading(true);
              }}
            />
          </Layout>
          <Layout style={styles.tab} level="2">
            <TaskComponent
              tasks={completeTasks}
              handleDelete={(id) => {
                handleDelete(id);
              }}
              handleDone={(id, status) => {
                handleDone(id, status);
              }}
              setIsloading={() => {
                setIsloading(true);
              }}
            />
          </Layout>
          <Layout style={styles.tab} level="2">
            <TaskComponent
              tasks={pendingTasks}
              handleDelete={(id) => {
                handleDelete(id);
              }}
              handleDone={(id, status) => {
                handleDone(id, status);
              }}
              setIsloading={() => {
                setIsloading(true);
              }}
            />
          </Layout>
        </ViewPager>
      )}
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
