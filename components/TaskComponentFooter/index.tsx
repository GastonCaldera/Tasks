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
}: TaskFooterType): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(
    status === "complete" ? true : false
  );
  const [isLoadingDone, setIsloadingDone] = useState<boolean>(false);
  const [isLoadingDelete, setIsloadingDelete] = useState<boolean>(false);

  useEffect(() => {
    setIsloadingDone(false);
    setIsloadingDelete(false);
  }, [status]);
  return (
    <View style={[styles.footerContainer]}>
      <Button
        style={styles.footerControl}
        size="small"
        status="basic"
        accessoryRight={TrashIcon}
        onPress={() => setVisible(true)}
      >
        {isLoadingDelete ? (
          <View>
            <Spinner size="small" />
          </View>
        ) : (
          "DELETE"
        )}
      </Button>
      <Button
        style={styles.footerControl}
        size="small"
        accessoryRight={DoneIcon}
        disabled={disabled}
        onPress={() => {
          setDisabled(true);
          setIsloadingDone(true);
          handleDone(id);
        }}
      >
        {isLoadingDone ? (
          <View>
            <Spinner size="small" />
          </View>
        ) : (
          "DONE"
        )}
      </Button>
      <Modal backdropStyle={styles.backdrop} visible={visible}>
        <Card disabled={true}>
          <Text style={{ paddingVertical: 20 }}>
            Are you sure you want to delete this task?
          </Text>
          <Button
            onPress={() => {
              setIsloadingDelete(true);
              setVisible(false);
              handleDelete(id);
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
