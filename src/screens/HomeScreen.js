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
import { colors } from "../constants/colors";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = TestIds.BANNER;

const HomeScreen = ({ navigation }) => {
  const [ip, setIp] = useState("");

  const handleIPSearch = () => {
    fetch(`http://ipwho.is/${ip}`)
      .then((res) => res.json())
      .then((result) => {
        result.success && navigation.navigate("IPData", result);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constanst.statusBarHeight + 20,
    backgroundColor: "#03074d",
  },
  title: {
    color: colors.WHITE,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  ipInput: {
    backgroundColor: colors.SECTION,
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
