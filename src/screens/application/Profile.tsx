import { useState } from "react";

import { ScrollView, TouchableOpacity } from "react-native";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/application";
import { UserPhoto } from "@components/application/UserPhoto";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import Toast from "react-native-toast-message";

export function Profile() {
  const [uri, setUri] = useState<string>("https://github.com/JoaoTrajano.png");

  const handleUserPhotoSelected = async () => {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0]) {
        const photoUri = photoSelected.assets[0].uri;
        const infoPhotoUri = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number;
        };

        if (infoPhotoUri.size && infoPhotoUri.size / 1024 / 1024 > 1) {
          Toast.show({
            type: "error",
            text1: "Ops!",
            text2: "O tamanho da imagem é maior que 1MB.",
            visibilityTime: 3000,
            autoHide: true,
            topOffset: 50,
            onShow: () => {},
            onHide: () => {},
          });
          return;
        }

        setUri(photoUri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VStack flex={1}>
      <Header options={{ title: "Perfil" }} />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto size="xl" source={{ uri }} alt="Imagem do usuário" />
          <TouchableOpacity onPress={handleUserPhotoSelected}>
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
