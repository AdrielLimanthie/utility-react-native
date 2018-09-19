import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Constants
import { HEADER_COLOR } from "../constants/colors";

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
    backgroundColor: HEADER_COLOR,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600"
  }
});

export default Header;
