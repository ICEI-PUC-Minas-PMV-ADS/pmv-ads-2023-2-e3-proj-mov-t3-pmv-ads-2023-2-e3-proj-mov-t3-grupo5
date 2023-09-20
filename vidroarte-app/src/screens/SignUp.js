import {
  NativeBaseProvider,
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from "native-base";

import BackgroundImg from "/../assets/back.png";
import Logo from "/../assets/logo.png";
import { Input } from "/../components/Input.tsx";
import { Button } from "/../components/Button.tsx";

export function SignUp() {
  return (
    <NativeBaseProvider>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} bg="gray.700" px={10} pb={16}>
          <Image
            source={BackgroundImg}
            alt="Peças de Vidro"
            resizeMode="contain"
            position="absolute"
          />

          <Center my={24}>
            <Image source={Logo} alt="Vidroarte" />
            <Text color="gray.100" fontSize="sm">
              Qualidade e Excelência
            </Text>
          </Center>

          <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
              Crie sua conta
            </Heading>

            <Input
              placeholder="Nome"
            />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Criar e acessar" />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt={24} />
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
