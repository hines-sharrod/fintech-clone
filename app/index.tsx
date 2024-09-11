import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={styles.header}>
        <Text style={styles.headerText}>Ready To Make Money?</Text>
      </View>

      <View style={styles.buttons}>
        <Link
          href={"/login"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "500" }}>
              Login
            </Text>
          </TouchableOpacity>
        </Link>

        <Link
          href={"/signup"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "white" },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ color: "black", fontSize: 22, fontWeight: "500" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 70,
    padding: 15,
    position: "absolute",
  },
  headerText: {
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
  buttons: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 20,
    bottom: 95,
    position: "relative",
  },
});

export default Page;
