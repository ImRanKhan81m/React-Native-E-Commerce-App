import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-3">

        {/* Header Section */}
        <View>
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
              source={{
                uri: "https://links.papareact.com/wru"
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs"> Deliver Now!</Text>
              <Text className="font-bold text-xl"> Current Location
                <Ionicons
                  name="chevron-down"
                  size={20}
                  color="#00CCBB"
                />
              </Text>
            </View>
            <View>
              <FontAwesome
                name="user-o"
                size={20}
                color="#00CCBB"
              />
            </View>
          </View>
        </View>

        {/* Search Bar */}

        <View>
          <View>
            <FontAwesome
              name="search"
              size={20}
              color="#00CCBB"
            />
            <TextInput className="border w-full" />
          </View>
          <Entypo
            name="sound-mix"
            size={20}
            color="#00CCBB"
          />
        </View>
    </SafeAreaView>
  )
}