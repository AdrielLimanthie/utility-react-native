import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Components
import ActionCard from "./components/ActionCard";

// Constants
import { PAGE_BACKGROUND_COLOR } from "../constants/colors";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionCard text="Secretary" style={styles.cardStyle} />
        <ActionCard text="Chess" style={styles.cardStyle} />
        <ActionCard text="Food" style={styles.cardStyle} />
        <ActionCard text="Board Game" style={styles.cardStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
    backgroundColor: PAGE_BACKGROUND_COLOR
  },
  cardStyle: {
    padding: 8,
    flexBasis: "50%"
  }
});

export default HomePage;
