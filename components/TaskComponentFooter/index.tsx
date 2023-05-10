import React from "react";
import { Button } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { DoneIcon, TrashIcon } from "../IconsCompoents";

const TaskComponentFooter = ({
  status,
}: {
  status: string;
}): React.ReactElement => (
  <View style={[styles.footerContainer]}>
    <Button
      style={styles.footerControl}
      size="small"
      status="basic"
      accessoryRight={TrashIcon}
    >
      DELETE
    </Button>
    <Button
      style={styles.footerControl}
      size="small"
      accessoryRight={DoneIcon}
      disabled={status === "complete" ? true : false}
    >
      DONE
    </Button>
  </View>
);

const styles = StyleSheet.create({
  footerControl: {
    marginHorizontal: 2,
  },
  footerContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default TaskComponentFooter;
