import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Heading, HStack, Image, Text, VStack, Icon } from 'native-base';

import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {

};

export function OrderCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image 
          source={{ uri: 'https://www.marinevidros.com.br/wp-content/uploads/2019/06/porta-pivotante-vidro-temperado-03.jpg' }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
        <Heading fontSize="lg" color="white" fontFamily="heading">
            Porta de Vidro Jateado
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            1 Unidade
          </Text>
        </VStack>

        <Icon 
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  );
}