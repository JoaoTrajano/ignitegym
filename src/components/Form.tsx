import { ReactNode } from "react";

import { Center } from "@gluestack-ui/themed";

type Props = {
  children: ReactNode;
};

export function Form({ children }: Props) {
  return (
    <Center gap="$2" w="$full" flex={1}>
      {children}
    </Center>
  );
}
