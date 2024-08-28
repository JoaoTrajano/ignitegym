import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function Header() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center">
      <VStack>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          João Trajano
        </Heading>
      </VStack>
    </HStack>
  );
}
