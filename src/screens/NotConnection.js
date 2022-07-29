import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/colors";

const NotConnection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={"wifi"} size={200} color={colors.WHITE} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: colors.WHITE }}>
          Ooops!
        </Text>
        <Text
          style={{
            color: colors.WHITE,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          You are not connected to the internet.
        </Text>
      </View>
    </View>
  );
};

export default NotConnection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 90,
    backgroundColor: "#03074d",
  },
  image: {
    width: 200,
    height: 200,
  },
  iconContainer: {
    marginBottom: 50,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 50,
  },
});
