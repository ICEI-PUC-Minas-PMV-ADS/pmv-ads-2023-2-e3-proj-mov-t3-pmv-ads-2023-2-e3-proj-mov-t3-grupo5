import { TouchableOpacity } from "react-native";

import {  Heading, HStack, Icon, Image, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";

import { DetailingCard } from "@components/DetailingCard";

export function OrderDetailing() {
  const navigation = useNavigation(AppNavigatorRoutesProps);

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="blue.500" size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <Heading color="gray.100" fontSize="lg" flexShrink={1} fontFamily="heading">
            Porta de Vidro Jateado
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="gray.200" ml={1} textTransform="capitalize">
              23/09/23
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack px={8} pt={12}>
        <Heading mb={5} color="white" fontSize="lg" fontFamily="heading">
          Informações Técnicas
        </Heading>

        <DetailingCard />
      </VStack>

      <VStack p={8}>
        <Image
          w={64}
          h={64}
          source={{
            uri: "https://www.marinevidros.com.br/wp-content/uploads/2019/06/porta-pivotante-vidro-temperado-03.jpg",
          }}
          alt="Porta de Vidro"
          mb={3}
          resizeMode="cover"
          rounded="lg"
          alignSelf="center"
        />
      </VStack>
    </VStack>
  );
}
