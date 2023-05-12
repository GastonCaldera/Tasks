import React from "react";
import { observer } from "mobx-react-lite";
import { Text, Card } from "@ui-kitten/components";
import { StyleSheet, ScrollView } from "react-native";
import TaskComponentHeader from "../TaskComponentHeader";
import TaskComponentFooter from "../TaskComponentFooter";
import { TaskType, TaskComponetType } from "../../type";

const TaskComponent = ({
  tasks,
  handleDelete,
  handleDone,
  setIsloading,
}: TaskComponetType): React.ReactElement => {
  return (
    <ScrollView>
      {tasks?.map((task: TaskType, index: number) => {
        return (
          <Card
            disabled={true}
            key={index}
            style={styles.card}
            header={
              <TaskComponentHeader title={"Description"} status={task.status} />
            }
            footer={
              <TaskComponentFooter
                id={task.id}
                status={task.status}
                handleDelete={(id) => handleDelete(id)}
                handleDone={(id, status) => handleDone(id, status)}
                setIsloading={(event: boolean) => setIsloading(event)}
              />
            }
          >
            <Text>{task.description}</Text>
          </Card>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
  },
  text: {
    margin: 2,
    marginVertical: 4,
  },
  footerControl: {
    marginHorizontal: 2,
  },
  footerContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default observer(TaskComponent);
