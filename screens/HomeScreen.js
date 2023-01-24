import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => { navigation.setOptions({ headerShown: false, }); }, []);
  return (
    <SafeAreaView className='bg-white pt-5'>
      <Text className="text-red-500">HomeScreen
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image source={{ uri: 'http://links.papareact.com/wru' }}
            className="h-7 w-7 p-4  rounded-full bg-gray-300" />
          <View className="flex-1">
            <Text className='font-bold text-xs text-gray-400'>Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        <View className = "flex-row" items-center space-x-2 pb-2 >
          <View className = "flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <SearchIcon color='gray' size={20} />
            <TextInput keyboardType="default" placeholder="Restaurants and cuisines" />
          </View>
          <AdjustmentsIcon color='#00CCBB' />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen