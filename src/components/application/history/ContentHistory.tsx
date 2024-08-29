import { useState } from "react";

import { SectionList } from "react-native";

import { HistoryCard } from "@components/application/history/HistoryCard";
import { Heading, Text } from "@gluestack-ui/themed";

export function ContentHistory() {
  const [history, setHistory] = useState([
    {
      title: "22.07.24",
      data: ["Puxada Fronta", "Remada Unilateral"],
    },
    {
      title: "23.07.24",
      data: ["Puxada Fronta"],
    },
    {
      title: "24.07.24",
      data: ["Puxada Fronta"],
    },
    {
      title: "25.07.24",
      data: ["Puxada Fronta"],
    },
    {
      title: "26.07.24",
      data: ["Puxada Fronta"],
    },
  ]);

  return (
    <SectionList
      sections={history}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <HistoryCard />}
      renderSectionHeader={({ section }) => (
        <Heading
          color="$gray200"
          fontSize="$md"
          mt="$10"
          mb="$3"
          fontFamily="$heading"
        >
          {section.title}
        </Heading>
      )}
      style={{ padding: 32 }}
      contentContainerStyle={
        history.length === 0 && { flex: 1, justifyContent: "center" }
      }
      ListEmptyComponent={
        <Text textAlign="center" color="$gray100">
          Não exerícios registrados ainda. {"\n"} Vamos fazer exercícios hoje?
        </Text>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}
