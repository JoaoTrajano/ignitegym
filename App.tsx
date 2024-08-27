import { StatusBar, View } from "react-native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";

import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Center style={{ flex: 1 }} bg="$gray700">
        {fontsLoaded ? <Text>Home</Text> : <Loading />}
      </Center>
    </GluestackUIProvider>
  );
}
