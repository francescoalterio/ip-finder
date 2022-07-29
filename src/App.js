import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import IPDataScreen from "./screens/IPDataScreen";
import { useNetInfo } from "@react-native-community/netinfo";
import NotConnection from "./screens/NotConnection";
import mobileAds from "react-native-google-mobile-ads";

const Stack = createNativeStackNavigator();

export default function App() {
  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      // Initialization complete!
    });

  const netInfo = useNetInfo();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            {netInfo.isConnected === false ? (
              <Stack.Screen
                name="NotConnection"
                component={NotConnection}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen
              name="IPData"
              component={IPDataScreen}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
