import { useMemo } from "react";
import { VStack, Image, Center, Text, ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/authentication.routes";

import Logo from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Inputs } from "@config/types";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "@components/Form";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required("Informe o email.").email("Email é inválido."),
  password: yup.string().required("Informe a senha."),
});

export function SignIn() {
  const inputs: Inputs<FormDataProps>[] = useMemo(
    () => [
      { name: "email", placeholder: "E-mail", inputType: "email" },
      { name: "password", placeholder: "Senha", inputType: "password" },
    ],
    [],
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleSignIn = (data: FormDataProps) => {
    console.log(data);
  };

  const handleGoSignUp = () => {
    navigation.navigate("signUp");
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
          <Form>
            <Text color="$gray100">Acesse a sua conta.</Text>
            {inputs.map(({ name, placeholder, inputType }) => (
              <Controller
                key={name}
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    secureTextEntry={inputType === "password"}
                    keyboardType={
                      inputType === "email" ? "email-address" : "default"
                    }
                    autoCapitalize={inputType === "email" ? "none" : undefined}
                    errorMessage={errors[name]?.message}
                  />
                )}
              />
            ))}
            <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
          </Form>
          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>
            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleGoSignUp}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
