import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Modal, Text, Card, Input } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const ModalAdd = ({ visible, setVisible, handleAdd }): React.ReactElement => {
  const [value, setValue] = useState("");
  return (
    <Modal
      backdropStyle={styles.backdrop}
      visible={visible}
      onBackdropPress={() => setVisible(false)}
    >
      <Card disabled={true}>
        <Text category="h6">Description</Text>
        <Input
          placeholder="Place your Task"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
          style={{ paddingVertical: 20 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            onPress={() => {
              setValue("");
              setVisible(false);
            }}
            style={{ marginRight: 10 }}
          >
            CANCEL
          </Button>
          <Button
            onPress={() => {
              handleAdd(value);
              setValue("");
            }}
          >
            ACCEPT
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default observer(ModalAdd);
