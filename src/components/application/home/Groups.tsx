import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/application/home/GroupCard";

export function Groups() {
  const [groupSelected, setGroupSelected] = useState<string>("Costas");

  const groups: string[] = ["Costas", "Ombros", "Peito", "Perna", "Pescoço"];

  return (
    <FlatList
      data={groups}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <GroupCard
          name={item}
          isActive={groupSelected.toUpperCase() === item.toUpperCase()}
          onPress={() => setGroupSelected(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 36 }}
      style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
    />
  );
}
