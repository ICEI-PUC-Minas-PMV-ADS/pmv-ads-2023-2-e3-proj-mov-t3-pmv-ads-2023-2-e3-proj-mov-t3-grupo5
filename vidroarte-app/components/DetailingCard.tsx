import { Heading, HStack, Image, Text, VStack, Center } from "native-base";

export function DetailingCard() {
  return (
    <VStack
      w="full"
      p={5}
      mb={5}
      bg="gray.600"
      rounded="md"
      alignItems="flex-start"
    >
      <Heading color="white" fontSize="md" textTransform="capitalize" mb={5}>
        Porta de Vidro Jateado
      </Heading>
      <Text color="gray.100" fontSize="lg" mb={5}>
        Dimensões: 1,70 m x 0,70 m {"\n"}
        Marca: Vidro Minas {"\n"}
        Modelo: Jateado Liso
      </Text>



    </VStack>
  );
}
