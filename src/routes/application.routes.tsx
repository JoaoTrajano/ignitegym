import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Exercise, History, Home, Profile } from "@screens/application";

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
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
