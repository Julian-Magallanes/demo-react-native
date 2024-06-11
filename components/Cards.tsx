import { Button, Image, Pressable, Text, View } from "react-native";

import tw from 'twrnc'; 

const Card = ({ title, ImageUrl  }: { title: React.ReactNode, ImageUrl: any }) => {
    function onPress() {
        alert(title)
    }
    return(
    <View
        style={tw`bg-neutral-200 p-4 flex flex-col items-center rounded-2xl m-4`}>
        <Image
        style={tw`w-32 h-32`}
        source={ImageUrl}
        />
        <Pressable style={tw`bg-gray-600 w-3/4 mt-4 py-2 rounded-full`} onPress={onPress}>
            <Text style={tw`text-white text-center font-bold`}>{title}</Text>
        </Pressable>
    </View>
)}
export default Card