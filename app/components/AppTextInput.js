import React from 'react';
import { TextInput, View ,Platform} from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons";
import Color from '../config/Color';
import defaultStyles from '../config/Styles';

function AppTextInput({icon,width='100%',...otherProps}) {
    return (
       <View style={[styles.conatiner,{width}]}>
           <MaterialCommunityIcons 
           name={icon}
           size={25} 
           color={Color.medium}
           style={styles.icon} 
           />
           <TextInput placeholderTextColor={Color.medium} {...otherProps} style={defaultStyles.text}/>
       </View> 
    );
}
const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:Color.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon:{
        marginRight:10
    },
})

export default AppTextInput;

