import { View as TouchableOpacity, Text, Image, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const RestaurantCard = ({
  id,
  ingUrl,
  title,
  short_description,
  rating,
  genre,
  address,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow rounded-md'>
      <Image
        source={{
          uri: ingUrl
        }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <FontAwesome
            name="star"
            size={15}
            color='green'
          />
          <Text className='text-sm text-gray-500'>
            <Text className='text-green-700'>{rating}</Text> {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1 pt-1'>
          <Ionicons
            name="location-outline"
            size={15}
          />
          <Text className='text-xs text-gray-500'>Nearby. {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard