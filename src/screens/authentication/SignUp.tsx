import { useMemo } from "react";
import { VStack, Image, Center, Text, ScrollView } from "@gluestack-ui/themed";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthNavigatorRoutesProps } from "@routes/authentication.routes";

import Logo from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Inputs } from "@config/types";
import { Form } from "@components/Form";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "A senha deve conter no minimo de 6 digitos."),
  password_confirm: yup
    .string()
    .required("Confirme a senha.")
    .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere."),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const inputs: Inputs<FormDataProps>[] = useMemo(
    () => [
      { name: "name", placeholder: "Nome" },
      { name: "email", placeholder: "E-mail", inputType: "email" },
      { name: "password", placeholder: "Senha", inputType: "password" },
      {
        name: "password_confirm",
        placeholder: "Confirme a senha",
        inputType: "password",
      },
    ],
    [],
  );

  const handleGoBackSignUp = () => {
    navigation.goBack();
  };

  const handleSignUp = (data: FormDataProps) => {
    console.log(data);
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
          position="absolute"
          alt="Imagem de fundo"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              Treine a sua mente e o seu corpo.
            </Text>
          </Center>

          <Form>
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
            <Button
              title="Criar e acessar"
              onPress={handleSubmit(handleSignUp)}
            />
          </Form>

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
