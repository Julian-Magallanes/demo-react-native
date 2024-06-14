import ParallaxScrollView from "@/components/ParallaxScrollView";
import React from "react";
import { TextInput ,Text, View } from "react-native";
import tw from 'twrnc'; 

export default function cimientos() {
  const [number, onChangeNumber] = React.useState('');
    return (
      <ParallaxScrollView>
        <>
        <Text style={tw`text-xl font-medium`}>Dimensiones</Text>
        <View style={tw`flex flex-row items-center justify-center w-full border border-black rounded-lg`}>
        <TextInput
        style={tw`w-3/4 p-2 `}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="ejemplo: 5"
        keyboardType="numeric"
        />
        <View style={tw`flex items-center justify-center w-1/4 h-full text-sm text-center bg-gray-300 border-l rounded-r-lg`}>
          <Text style={tw`font-base`}>METROS</Text>
        </View>
        </View>
        </>
      </ParallaxScrollView>
    );
  }