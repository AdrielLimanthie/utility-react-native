import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Constants
import { TEXT_PRIMARY_BLACK } from "../../../../constants/colors";

const ActionCard = ({ url, text, style }) => {
  return (
    <View style={style}>
      <View style={styles.card}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 140,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
  text: {
    color: TEXT_PRIMARY_BLACK,
    textAlign: "center",
    fontSize: 16
  }
});

export default ActionCard;
