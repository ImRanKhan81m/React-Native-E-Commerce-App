import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  // 



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
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center rounded">
          <FontAwesome
            name="search"
            size={20}
            color="gray"
          />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <Entypo
          name="sound-mix"
          size={20}
          color="#00CCBB"
        />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100 "

      >
        {/* category's */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="327443"
          title="Featured Restaurants"
          description="Explore the best restaurants in your area"
          featuredCategory="featured"
        />

        {/* Tasty Discount */}
        <FeaturedRow
          id="326452"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          featuredCategory="featured"
        />
        {/* Featured Rows */}
        <FeaturedRow
          id="342522"
          title="Offer near you!"
          description="Why not support your local restaurant tonight"
          featuredCategory="offers"
        />
      </ScrollView>

    </SafeAreaView>
  )
}