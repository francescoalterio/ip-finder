import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker, Circle } from "react-native-maps";

const Map = ({ latitude, longitude }) => {
  return (
    <MapView
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.15,
        longitudeDelta: 0.0421,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Marker
        coordinate={{
          latitude,
          longitude,
        }}
      />
      <Circle
        center={{
          latitude,
          longitude,
        }}
        radius={3000}
        strokeColor="rgba(255, 38, 45, 0.7)"
        fillColor="rgba(255, 38, 45, 0.2)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({});

export default Map;
