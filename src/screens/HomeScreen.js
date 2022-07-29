import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Constanst from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { fakeData } from "../fakeData";

const HomeScreen = ({ navigation }) => {
  const [ip, setIp] = useState("");

  const handleIPSearch = () => {
    navigation.navigate("IPData", fakeData);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Find any IP</Text>
        <TextInput
          style={styles.ipInput}
          value={ip}
          onChangeText={(text) => setIp(text)}
          placeholder="IP Here!"
          placeholderTextColor="#999dba"
        />
      </View>
      <View style={styles.btnFindContainer}>
        <View style={styles.btnFindBorder2} />
        <View style={styles.btnFindBorder1} />
        <TouchableOpacity style={styles.btnFind} onPress={handleIPSearch}>
          <Ionicons name={"locate"} size={80} color={"#8ba2d0"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constanst.statusBarHeight + 20,
    backgroundColor: "#03074d",
    paddingHorizontal: 20,
  },
  title: {
    color: "#f2f2f2",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  ipInput: {
    backgroundColor: "#141859",
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 20,
    color: "#f2f2f2",
  },
  btnFindContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnFind: {
    backgroundColor: "#f2f2f2",
    width: 130,
    height: 130,
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  btnFindBorder1: {
    backgroundColor: "#8122e9",
    width: 180,
    height: 180,
    borderRadius: 500,
    position: "absolute",
  },
  btnFindBorder2: {
    backgroundColor: "rgba(38,43,113,0.5)",
    width: 230,
    height: 230,
    borderRadius: 500,
    position: "absolute",
  },
});

export default HomeScreen;
