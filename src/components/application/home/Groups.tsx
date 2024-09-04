import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";

import { getAllGroups } from "@services/groups";

import { GroupCard } from "@components/application/home/GroupCard";

export function Groups() {
  const [groupSelected, setGroupSelected] = useState<string>("Costas");
  const [groups, setGroups] = useState<string[]>([]);

  const fetchGroups = async () => {
    const groups = await getAllGroups();
    setGroups(groups);
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [groups]),
  );

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
