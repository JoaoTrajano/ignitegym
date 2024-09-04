import { useContext, useMemo } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Box } from "@gluestack-ui/themed";

import { config } from "../../config/gluestack-ui.config";

import { useAuth } from "@hooks/useAuth";

import { ApplicationRoutes } from "@routes/application.routes";
import { AuthenticationRoutes } from "@routes/authentication.routes";

export function Routes() {
  const { user } = useAuth();

  const theme = useMemo(() => {
    DefaultTheme.colors.background = config.tokens.colors.gray700;
    return DefaultTheme;
  }, [DefaultTheme, config]);

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        {user.id ? <ApplicationRoutes /> : <AuthenticationRoutes />}
      </NavigationContainer>
    </Box>
  );
}
