import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView
} from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import BackgroundImg from "/../assets/back.png";
import Logo from "/../assets/logo.png";
import { Input } from "/../components/Input.tsx";
import { Button } from "/../components/Button.tsx";


export function SignIn() {

  const navigation = useNavigation(AuthNavigatorRoutesProps);

  function handleNewAccount(){
    navigation.navigate('signUp');

  }
  function verificaUsuario(){
    navigation.navigate('Autentica');

  }

  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={ {flexGrow : 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
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
            getElementById="usuario"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" getElementById="senha" secureTextEntry />

          <Button title="Acessar" variant="outline" onPress={verificaUsuario}/>
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button title="Criar conta" variant="outline" onPress={handleNewAccount} />
        </Center>




      </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
