import { VStack, Image, Center, Text, ScrollView } from "@gluestack-ui/themed";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/authentication.routes";

import Logo from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleGoBackSignUp = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      width="$full"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} alignItems="center">
        <Image
          w="$full"
          h={624}
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          position="absolute"
          alt="Imagem de fundo"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize={"$sm"}>
              Treine a sua mente e o seu corpo.
            </Text>
          </Center>
          <Center gap="$2" w="$full" flex={1}>
            <Text color="$gray100">Crie a sua conta.</Text>
            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Button title="Acessar" />
          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            mt="$12"
            onPress={handleGoBackSignUp}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
