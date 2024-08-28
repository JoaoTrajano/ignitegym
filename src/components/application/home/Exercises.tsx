import { useState } from "react";
import { FlatList } from "react-native";

import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { ExerciseCard } from "@components/application/home/ExerciseCard";

export function Exercises() {
  const [exercises, setExercises] = useState<string[]>([
    "Remada Frontal",
    "Remada Unilateral - 1",
    "Remada Frontal - 2",
    "Remada Unilateral - 3",
    "Remada Frontal - 4",
    "Remada Unilateral - 5",
    "Remada Frontal - 6",
    "Remada Unilateral - 7",
  ]);

  return (
    <VStack px="$8" flex={1}>
      <HStack justifyContent="space-between" alignItems="center" mb="$5">
        <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
          Exercícios
        </Heading>
        <Text color="$gray200" fontSize="$sm" fontFamily="$body">
          {exercises.length}
        </Text>
      </HStack>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ExerciseCard />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </VStack>
  );
}
