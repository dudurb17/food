import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ItemFood } from "./food";

export interface FoodProps {
  id:string;
  name:string;
  price:number;
  time:string;
  delivery:number;
  rating:number;
  image:string;
  restaurantId:string
}


export default function TredingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.112:3000/foods");
      const data = await response.json();
      setFoods(data)
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <ItemFood food={item}/>}
      horizontal={true}
      contentContainerStyle={{gap:14, paddingLeft:16, paddingRight:16}}
      showsHorizontalScrollIndicator={false}
    />
  );
}
