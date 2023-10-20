import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { OrderCard } from "@components/OrderCard";
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Home() {
  const [groups, setGroups] = useState(['Pedidos', 'Busca', 'Suporte']);
  const [pedidos, setPedidos] = useState(['Pedidos', 'Busca', 'Suporte']);
  const [groupSelected, setGroupSelected] = useState('Pedidos');

  const navigation = useNavigation(AppNavigatorRoutesProps);

  function handleOpenOrderDetails() {
    navigation.navigate('orderDetailing');
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 10,
        }}
        my={10}
        maxH={10}
      />

      <VStack px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Pedidos
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {pedidos.length}
          </Text>
        </HStack>
        <FlatList 
          data={pedidos}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <OrderCard onPress={handleOpenOrderDetails}/>
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20
          }}
        />
      </VStack>
    </VStack>
  );
}
