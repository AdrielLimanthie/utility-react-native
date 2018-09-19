import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <React.Fragment>
      <View style={styles.statusBar} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Rubik</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 24,
    backgroundColor: "#000"
  },
  header: {
    height: 40,
    backgroundColor: "#c481fb",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: 20
  }
});

export default Header;
