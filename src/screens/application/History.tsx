import { Header } from "@components/application";
import { VStack } from "@gluestack-ui/themed";

import { ContentHistory } from "@components/application/history";

export function History() {
  return (
    <VStack flex={1}>
      <Header title="Histórico" />
      <ContentHistory />
    </VStack>
  );
}
