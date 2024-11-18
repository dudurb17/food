import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RestaurantsProps } from '../restaurants'
import RestaurantItem from './item';

export default function RestaurantVerticalList() {

  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.112:3000/restaurants");
      const data = await response.json();
      setRestaurants(data)
    }
    getFoods();
  }, []);

  return (
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
      {restaurants.map(item=>(<RestaurantItem item={item} key={item.id} />))}
    </View>
  )
}