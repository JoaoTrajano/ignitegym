import { useMemo } from "react";
import { Platform } from "react-native";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import HomeSVG from "@assets/home.svg";
import HistorySVG from "@assets/history.svg";
import ProfileSVG from "@assets/profile.svg";

import { Exercise, History, Home, Profile } from "@screens/application";

import { config } from "../../config/gluestack-ui.config";

type ApplicationRoutesType = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
};
export type ApplicationNavigationProps =
  BottomTabNavigationProp<ApplicationRoutesType>;

const { Navigator, Screen } = createBottomTabNavigator<ApplicationRoutesType>();

export function ApplicationRoutes() {
  const [iconSize, tokens] = useMemo(() => {
    return [config.tokens.space["6"], config.tokens];
  }, [config]);

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray200,
        tabBarStyle: {
          backgroundColor: tokens.colors.gray600,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: tokens.space["10"],
          paddingTop: tokens.space["6"],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSVG fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySVG fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSVG fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
