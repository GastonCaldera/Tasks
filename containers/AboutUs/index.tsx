import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { observer } from "mobx-react-lite";
import { Text } from "@ui-kitten/components";

const AboutUs = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>This App works with Expo and Kitty Ui 😻</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    flex: 1,
  },
});

export default observer(AboutUs);
