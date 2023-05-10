import React from "react";
import { Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { TaskComponentHeaderType } from "../../type";

const TaskComponentHeader = ({
  title,
  status,
}: TaskComponentHeaderType): React.ReactElement => (
  <View style={styles.view}>
    <Text category="h6">{title}</Text>
    <Text
      category="s1"
      style={{ color: status === "complete" ? "#00E71C" : "#003AFF" }}
    >
      {status}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    margin: 10,
  },
});

export default TaskComponentHeader;
