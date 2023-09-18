import { NativeBaseProvider, VStack, Image, Center, Text, Heading, Input } from "native-base";

import BackgroundImg from 'assets/back.png';
import Logo from 'assets/logo.png';
//import { Input } from './components/Input';

export function SignIn() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bg="gray.700" px={10}>
        <Image 
          source={BackgroundImg}
          alt="Peças de Vidro"
          resizeMode="contain"
          position="absolute"
        />
      
        <Center my={24}>
          <Image 
            source={Logo}
            alt="Vidroarte"
          />
          <Text color="gray.100" fontSize="sm">
            Qualidade e Excelência
          </Text>
        </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse a conta
        </Heading>

        <Input 
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize = "none"
          px={4}
          borderWidth={1}
          fontSize="md"
          color="white"
          fontFamily = "body"
          mb={4}
          placeholderTextColor="gray.300"
          />
        <Input 
          placeholder="Senha" 
          secureTextEntry = {true}
          px={4}
          borderWidth={1}
          fontSize="md"
          color="white"
          fontFamily = "body"
          mb={4}
          placeholderTextColor="gray.300"
        />

      </Center>

      </VStack>
    </NativeBaseProvider>
  );
}
