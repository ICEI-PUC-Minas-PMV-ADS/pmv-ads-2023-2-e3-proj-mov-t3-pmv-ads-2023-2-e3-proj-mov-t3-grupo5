import { useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, Heading, HStack, Text, VStack, useToast } from "native-base";
import { OrderCard } from "@components/OrderCard";
import { AppNavigatorRoutesProps } from '@routes/app.routes';


import { api } from '@services/api';
import { AppError } from "@utils/AppError";
import { string } from "yup";
import { OrderDetailing } from "./OrderDetailing";


export function Home() {
  const [groups, setGroups] = useState([]);
  const [pedidos, setOrder] = useState([]);
  const [groupSelected, setGroupSelected] = useState('Pedidos');

  const navigation = useNavigation(AppNavigatorRoutesProps);
  const toast = useToast();

  function handleOpenOrderDetails() {
    navigation.navigate('orderDetailing');
  }
  async function fetchGroups() {

    try {

      const response = await api.get('/groups');
    
      setGroups(response.data)
     } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível carregar os grupos.';

      toast.show({

        title,

        placement: 'top', bgColor: 'red.500'

      });

    }

  }
 async function fetchOrder() {

    try {
      //console.log(groupSelected)
      const response = await api.get('/exercises');
      console.log(response.data)
      setOrder(response.data)
    } catch (error) {

      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível carregar os pedidos.';
      toast.show({

        title,
        placement: 'top', bgColor: 'red.500'

      });

    }
console.log(pedidos)
  }

useEffect(() => {
  async function fetchData() {
      try {
         
        //fetchOrder() dando conflito com o fetchGroups()
        fetchGroups()
       }catch (error) {
          console.error('Erro ao recuperar token:', error);
       }
    }
      fetchData()
  },[]);
 
  useFocusEffect(useCallback(() => {
    fetchOrder()
  }, [groupSelected]));


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
          <Heading color="gray.200" fontSize="md" fontFamily="heading" >
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
            <OrderCard onPress={handleOpenOrderDetails} />
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