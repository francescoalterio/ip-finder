import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import React from "react";
import Constanst from "expo-constants";
import MapView, { Marker, Circle } from "react-native-maps";

const IPDataScreen = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: route.params.latitude,
          longitude: route.params.longitude,
          latitudeDelta: 0.15,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: Dimensions.get("window").width - 40,
          height: Dimensions.get("window").width - 40,
        }}
      >
        <Marker
          coordinate={{
            latitude: route.params.latitude,
            longitude: route.params.longitude,
          }}
        />
        <Circle
          center={{
            latitude: route.params.latitude,
            longitude: route.params.longitude,
          }}
          radius={3000}
          strokeColor="rgba(255, 38, 45, 0.7)"
          fillColor="rgba(255, 38, 45, 0.2)"
        />
      </MapView>
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
});

export default IPDataScreen;
