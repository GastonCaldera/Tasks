import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Layout, ViewPager, Spinner, Button } from "@ui-kitten/components";
import BottomTabs from "../../components/BottomTabs";
import TaskComponent from "../../components/TaskComponent";
import { sleep, getStoreData } from "../../utils/function";
import ModalAdd from "../../components/ModalAdd";
import { TaskType } from "../../type";

const Home = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    const newState = tasks.filter((element: TaskType) => element.id !== id);
    sleep(500).then(() => {
      setTasks(newState);
      setIsloading(false);
    });
  };

  const handleDone = (id: number, status: string) => {
    const newState = tasks.map((element: TaskType) => {
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

  const handleCreate = (description: string) => {
    const newState = tasks;
    newState.push({
      id: tasks.length,
      status: "pending",
      description,
    });
    setIsloading(true);
    setVisible(false);
    sleep(500).then(() => {
      setTasks(newState);
      setIsloading(false);
    });
  };

  useEffect(() => {
    setIsloading(true);
    getStoreData("tasks").then((data) => {
      setTasks(data);
      setIsloading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Spinner size={"galactic"} />
        </View>
      ) : (
        <>
          <View
            style={{
              position: "absolute",
              zIndex: 999,
              top: 0,
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              size="small"
              style={{ width: 70, marginRight: 10 }}
              onPress={() => setVisible(true)}
            >
              ADD
            </Button>
          </View>
          <ViewPager
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            style={styles.tab}
            swipeEnabled={false}
          >
            <Layout style={styles.tab} level="2">
              <TaskComponent
                tasks={tasks}
                handleDelete={(id: number) => {
                  handleDelete(id);
                }}
                handleDone={(id: number, status: string) => {
                  handleDone(id, status);
                }}
                setIsloading={() => {
                  setIsloading(true);
                }}
              />
            </Layout>
            <Layout style={styles.tab} level="2">
              <TaskComponent
                tasks={tasks.filter((element) => element.status === "complete")}
                handleDelete={(id: number) => {
                  handleDelete(id);
                }}
                handleDone={(id: number, status: string) => {
                  handleDone(id, status);
                }}
                setIsloading={() => {
                  setIsloading(true);
                }}
              />
            </Layout>
            <Layout style={styles.tab} level="2">
              <TaskComponent
                tasks={tasks.filter((element) => element.status === "pending")}
                handleDelete={(id: number) => {
                  handleDelete(id);
                }}
                handleDone={(id: number, status: string) => {
                  handleDone(id, status);
                }}
                setIsloading={() => {
                  setIsloading(true);
                }}
              />
            </Layout>
          </ViewPager>
        </>
      )}
      <BottomTabs
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <ModalAdd
        visible={visible}
        setVisible={setVisible}
        handleAdd={(event) => {
          handleCreate(event);
        }}
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

export default observer(Home);
