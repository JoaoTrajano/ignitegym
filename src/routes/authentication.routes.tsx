import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { SignIn, SignUp } from "@screens/authentication";

type AuthRoutesType = {
  signIn: undefined;
  signUp: undefined;
};
export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutesType>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesType>();

export function AuthenticationRoutes() {
  return (
    <Navigator initialRouteName="signIn" screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
