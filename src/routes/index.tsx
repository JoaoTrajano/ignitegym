import { useMemo } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { Box } from "@gluestack-ui/themed";
import { AuthRoutes } from "@routes/auth.routes";

import { config } from "../../config/gluestack-ui.config";

export function Routes() {
  const theme = useMemo(() => {
    DefaultTheme.colors.background = config.tokens.colors.gray700;
    return DefaultTheme;
  }, [DefaultTheme, config]);

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
