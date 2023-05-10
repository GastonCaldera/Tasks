import React, { useEffect, useState } from "react";
import { Button, Modal, Text, Card, Spinner } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { DoneIcon, TrashIcon } from "../IconsCompoents";
import { TaskFooterType } from "../../type";

const TaskComponentFooter = ({
  id,
  status,
  handleDelete,
  handleDone,
  setIsloading,
}: TaskFooterType): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View style={[styles.footerContainer]}>
      <Button
        style={styles.footerControl}
        size="small"
        status="basic"
        accessoryRight={TrashIcon}
        onPress={() => setVisible(true)}
      >
        DELETE
      </Button>
      <Button
        style={styles.footerControl}
        size="small"
        accessoryRight={DoneIcon}
        onPress={() => {
          handleDone(id, status);
          setIsloading();
        }}
      >
        {status === "complete" ? "TO DO" : "DONE"}
      </Button>
      <Modal backdropStyle={styles.backdrop} visible={visible}>
        <Card disabled={true}>
          <Text style={{ paddingVertical: 20 }}>
            Are you sure you want to delete this task?
          </Text>
          <Button
            onPress={() => {
              setVisible(false);
              handleDelete(id);
              setIsloading();
            }}
          >
            ACCEPT
          </Button>
        </Card>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  footerControl: {
    marginHorizontal: 2,
  },
  footerContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default TaskComponentFooter;
