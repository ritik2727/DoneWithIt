import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
    name,
    IconColor='#fff',
    size=40,
    backgroundColor='#000',

}) {
    return (
      <View 
        style={{
           width:size,
           height:size,
           backgroundColor,
           borderRadius:size/2,
           justifyContent: "center",
        alignItems: "center",
        }}
        >
            <MaterialCommunityIcons name={name} size={size*0.5} color={IconColor} />
        </View>
    );
}

export default Icon;