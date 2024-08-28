import {
  Heading,
  HStack,
  Text,
  VStack,
  Icon,
  Center,
} from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

import { UserPhoto } from "@components/application/UserPhoto";

type Props = {
  title?: string;
};

export function Header({ title = "" }: Props) {
  return title !== "" ? (
    <Center bg="$gray600" pt="$16" pb="$6">
      <Heading color="$gray100" fontSize="$xl" fontFamily="$heading">
        {title}
      </Heading>
    </Center>
  ) : (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: "https://github.com/JoaoTrajano.png" }}
        alt="Imagem do usuário"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          João Trajano
        </Heading>
      </VStack>
      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  );
}
