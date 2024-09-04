import { TouchableOpacity } from "react-native";
import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { ArrowLeft, LogOut } from "lucide-react-native";

import { UserPhoto } from "@components/application/UserPhoto";

import { useNavigation } from "@react-navigation/native";
import { ApplicationNavigationProps } from "@routes/application.routes";

import BodySvg from "@assets/body.svg";

import { useAuth } from "@hooks/useAuth";

type Options = {
  title?: string;
  isGoBack?: boolean;
};

type Props = {
  options?: Options;
};

export function Header({ options = {} }: Props) {
  const navigation = useNavigation<ApplicationNavigationProps>();
  const { logOut } = useAuth();

  return options.title && options.title !== "" ? (
    <>
      <VStack px="$8" bg="$gray600" pt="$12">
        {options.isGoBack ? (
          <HStack justifyContent="space-between" alignItems="center">
            <VStack gap="$1">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon as={ArrowLeft} color="$green500" size="xl" />
              </TouchableOpacity>
              <Heading color="$gray100" fontSize="$lg" fontFamily="$heading">
                {options.title}
              </Heading>
            </VStack>
            <HStack
              alignSelf="flex-end"
              justifyContent="center"
              alignItems="center"
              mt="$8"
              mb="$8"
              flexShrink={1}
            >
              {/* <HStack>{options.isGoBack.icon}</HStack> */}
              <BodySvg />
              <Text color="$gray200" ml="$1" textTransform="capitalize">
                Costas
              </Text>
            </HStack>
          </HStack>
        ) : (
          <HStack
            bg="$gray600"
            pt="$16"
            pb="$5"
            alignItems="center"
            justifyContent="center"
          >
            <Heading color="$gray100" fontSize="$xl" fontFamily="$heading">
              {options.title}
            </Heading>
          </HStack>
        )}
      </VStack>
    </>
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
      <TouchableOpacity onPress={logOut}>
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
