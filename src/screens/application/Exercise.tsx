import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";

import { Header } from "@components/application";

import { Button } from "@components/Button";

import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { ScrollView } from "react-native";

export function Exercise() {
  return (
    <VStack flex={1}>
      <Header
        options={{
          title: "Puxada Frontal",
          isGoBack: true,
        }}
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 64 }}
        showsHorizontalScrollIndicator={false}
      >
        <VStack p="$6">
          <Image
            source="https://treinomestre.com.br/wp-content/uploads/2018/09/desenvolvimento-com-halteres-.jpg.webp"
            alt="imagem do exercicio"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
            w="$full"
            h="$80"
          />
          <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="$16"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  Costas
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como relizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
