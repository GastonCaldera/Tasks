import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Modal, Text, Card } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
// import { DoneIcon, TrashIcon } from "../IconsCompoents";
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
        onPress={() => setVisible(true)}
      >
        DELETE
      </Button>
      <Button
        style={styles.footerControl}
        size="small"
        onPress={() => {
          handleDone(id, status);
          setIsloading(true);
        }}
      >
        {status === "complete" ? "TO DO" : "DONE"}
      </Button>
      <Modal
        backdropStyle={styles.backdrop}
        visible={visible}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true}>
          <Text style={{ paddingVertical: 20 }}>
            Are you sure you want to delete this task?
          </Text>
          <Button
            onPress={() => {
              setVisible(false);
              handleDelete(id);
              setIsloading(true);
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

export default observer(TaskComponentFooter);
