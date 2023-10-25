import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
  useToast
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { useAuth } from "@hooks/useAuth";

import BackgroundImg from "/../assets/back.png";
import Logo from "/../assets/logo.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const { signIn } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormData) {
    try {
      await signIn(email, password);
    } catch(error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }

  return (
    <NativeBaseProvider>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
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

            <Controller
              control={control}
              name="email"
              rules={{ required: "Informe o e-mail" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                  autoCapitalize="none"
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field: { onChange } }) => (
                <Input
                  secureTextEntry
                  placeholder="Senha"
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
          </Center>

          <Center mt={24}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
}
