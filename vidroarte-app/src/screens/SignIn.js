import {
  NativeBaseProvider,
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView
} from "native-base";

import BackgroundImg from "/../assets/back.png";
import Logo from "/../assets/logo.png";
import { Input } from "/../components/Input.tsx";
import { Button } from "/../components/Button.tsx";

export function SignIn() {
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={ {flexGrow : 1}} showsVerticalScrollIndicator={false}>
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
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button title="Criar conta" variant="outline" />
        </Center>




      </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
