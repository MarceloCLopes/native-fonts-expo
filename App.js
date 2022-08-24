import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Ultra: require("./assets/fonts/Ultra-Regular.ttf"),
    Dyna: require("./assets/fonts/DynaPuff.ttf"),
    Rubik: require("./assets/fonts/RubikMazeRegular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <StatusBar style="auto" />
      <Text
        style={{
          fontFamily: "Ultra",
          fontSize: 25,
        }}
      >
        Code with Marcelo!
      </Text>
      <Text
        style={{
          fontFamily: "Dyna",
          fontSize: 25,
        }}
      >
        Code with Marcelo!
      </Text>
      <Text
        style={{
          fontFamily: "Rubik",
          fontSize: 25,
        }}
      >
        Code with Marcelo!
      </Text>
      <Text
        style={{
          fontFamily: "Inter_900Black",
          fontSize: 25,
        }}
      >
        Code with Marcelo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d4d4",
    alignItems: "center",
    justifyContent: "center",
  },
});
