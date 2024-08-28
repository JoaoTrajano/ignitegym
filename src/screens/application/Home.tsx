import { VStack } from "@gluestack-ui/themed";

import { Header } from "@components/application";
import { Groups, Exercises } from "@components/application/home";

export function Home() {
  return (
    <VStack flex={1}>
      <Header />
      <Groups />
      <Exercises />
    </VStack>
  );
}
