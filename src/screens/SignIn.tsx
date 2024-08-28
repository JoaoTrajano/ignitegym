import { VStack, Image } from "@gluestack-ui/themed";
import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700" alignItems="center">
      <Image
        w="$full"
        h={624}
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        position="absolute"
        alt="Imagem de fundo"
      />
    </VStack>
  );
}
