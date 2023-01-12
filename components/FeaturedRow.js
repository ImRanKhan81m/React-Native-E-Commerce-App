import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className="font-bold text-xl">{title}</Text>
        <AntDesign
          name="arrowright"
          size={20}
          color="#00CCBB"
        />
      </View>
      <Text className="text-xs text-gray-500 px-4">
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >

        {/* RestaurantCards */}
        <RestaurantCard 
          id="1"
          ingUrl="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="The Best Pizza"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven."
          rating={4.5}
          genre='Pizza'
          address="1234 Main Street"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id="1"
          ingUrl="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="The Best Pizza"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven."
          rating={4.5}
          genre='Pizza'
          address="1234 Main Street"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id="1"
          ingUrl="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="The Best Pizza"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven."
          rating={4.5}
          genre='Pizza'
          address="1234 Main Street"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id="1"
          ingUrl="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="The Best Pizza"
          short_description="Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven."
          rating={4.5}
          genre='Pizza'
          address="1234 Main Street"
          dishes={["Pizza", "Pasta", "Salad"]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow