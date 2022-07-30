import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Constanst from "expo-constants";
import Map from "../components/Map";
import { colors } from "../constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SvgUri } from "react-native-svg";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useInterstitialAd,
} from "react-native-google-mobile-ads";

const adUnitId = TestIds.BANNER;

const IPDataScreen = ({ navigation, route }) => {
  const { isLoaded, isClosed, load, show } = useInterstitialAd(
    TestIds.INTERSTITIAL,
    {
      requestNonPersonalizedAdsOnly: true,
    }
  );

  const handleGoBack = () => {
    if (isLoaded) {
      show();
    } else {
      // No advert ready to show yet
      navigation.goBack();
    }
  };

  useEffect(() => {
    // Start loading the interstitial straight away
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      // Action after the ad is closed
      navigation.goBack();
    }
  }, [isClosed, navigation]);

  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
            <Ionicons name={"arrow-back"} size={30} color={"#8ba2d0"} />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>IP Data "{route.params.ip}"</Text>
          </View>
          <View style={styles.mapContainer}>
            <Map
              latitude={route.params.latitude}
              longitude={route.params.longitude}
            />
          </View>
          <View style={styles.locationDataContainer}>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Location</Text>
              <Text style={styles.textData}>
                Continent: {route.params.continent}
              </Text>
              <Text style={styles.textData}>
                Country: {route.params.country}
              </Text>
              <Text style={styles.textData}>Region: {route.params.region}</Text>
              <Text style={styles.textData}>City: {route.params.city}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Location</Text>
              <Text style={styles.textData}>
                Latitude: {route.params.latitude}
              </Text>
              <Text style={styles.textData}>
                Longitude: {route.params.longitude}
              </Text>
              <Text style={styles.textData}>
                Postal Code: {route.params.postal}
              </Text>
              <Text style={styles.textData}>
                Calling Code: {route.params.calling_code}
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Country</Text>
            <Text style={styles.textData}>Capital: {route.params.capital}</Text>
            <Text style={styles.textData}>Borders: {route.params.borders}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Timezone</Text>
            <Text style={styles.textData}>
              UTC: {route.params.timezone.utc}
            </Text>
            <Text style={styles.textData}>
              Offset: {route.params.timezone.offset}
            </Text>
            <Text style={styles.textData}>
              Current Time: {route.params.timezone.current_time}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Connection</Text>
            <Text style={styles.textData}>
              ASN: {route.params.connection.asn}
            </Text>
            <Text style={styles.textData}>
              ORG: {route.params.connection.org}
            </Text>
            <Text style={styles.textData}>
              ISP: {route.params.connection.isp}
            </Text>
            <Text style={styles.textData}>
              Domain: {route.params.connection.domain}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constanst.statusBarHeight + 20,
    backgroundColor: "#03074d",

    paddingBottom: 20,
  },
  goBack: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 20,
  },
  title: {
    color: colors.WHITE,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.WHITE,
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "bold",
  },
  mapContainer: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 40,
    padding: 20,
    backgroundColor: colors.SECTION,
    borderRadius: 5,
    marginTop: 20,
  },
  locationDataContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    backgroundColor: colors.SECTION,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  textData: {
    color: colors.WHITE,
    fontSize: 13,
  },
  flagWrapper: {
    width: 100,
    height: "100%",
    borderRadius: 500,
    position: "absolute",
    right: 10,
  },
});

export default IPDataScreen;
