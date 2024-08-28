import { ComponentProps } from "react";
import { Button as GluestackButton, Text } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: "outline" | "solid";
  isLoading?: boolean;
};

export function Button({
  title,
  variant = "solid",
  isLoading = false,
  ...rest
}: Props) {
  return (
    <GluestackButton
      h="$14"
      w="$full"
      rounded="$sm"
      bg={variant === "outline" ? "transparent" : "$green700"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      $active-bg={variant === "outline" ? "$gray500" : "$green500"}
      borderColor="$green500"
      {...rest}
    >
      <Text
        flex={1}
        color={variant === "outline" ? "$green500" : "$white"}
        fontFamily="$heading"
        fontSize="$sm"
        textAlign="center"
      >
        {title}
      </Text>
    </GluestackButton>
  );
}
