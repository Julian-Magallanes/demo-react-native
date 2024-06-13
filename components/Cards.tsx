import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

import tw from 'twrnc'; 
const Card = ({ title, ImageUrl  }: { title: string, ImageUrl: any }) => {

    return(
    <View
        style={tw`flex flex-col items-center p-4 m-4 bg-neutral-200 rounded-2xl`}>
        <Image
        style={tw`w-32 h-32`}
        source={ImageUrl}
        />
        <Link 
        href={`/materials/${title.toLowerCase()}`}
        style={tw`flex items-center content-center justify-center w-3/4 py-2 mt-4 bg-gray-600 rounded-full`}>
            <Text style={tw`w-full font-bold text-center text-white`}>{title}</Text>
        </Link>
    </View>
)}
export default Card