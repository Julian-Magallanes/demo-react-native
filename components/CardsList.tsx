import { FlatList, SafeAreaView, Text } from "react-native";
import DATA from "@/helpers/preload";
import tw from 'twrnc'; 
import Card from "./Cards";
const CardsList = () => (
    <SafeAreaView style={tw`flex m-4`}>
        <FlatList
        scrollEnabled={false}
        data={DATA}
        renderItem={({item}) => <Card title={item.title} ImageUrl={item.image}/>}
        keyExtractor={(item, index) => item.id.toString()} 
      />
    </SafeAreaView>
)
export default CardsList