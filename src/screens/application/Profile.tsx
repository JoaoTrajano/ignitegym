import { ScrollView, TouchableOpacity } from "react-native";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/application";
import { UserPhoto } from "@components/application/UserPhoto";

export function Profile() {
  return (
    <VStack flex={1}>
      <Header title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            size="xl"
            source={{ uri: "https://github.com/JoaoTrajano.png" }}
            alt="Imagem do usuário"
          />
          <TouchableOpacity>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input value="joao.trajanosouza@gmail.com" bg="$gray600" />
          </Center>
          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            fontSize="$md"
            mt="$12"
            mb="$2"
          >
            <Text color="$gray200">Alterar senha</Text>
          </Heading>
          <Center w="$full" gap="$4">
            <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
            <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
            <Input
              placeholder="Confirme a nova senha"
              bg="$gray600"
              secureTextEntry
            />
            <Button title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
