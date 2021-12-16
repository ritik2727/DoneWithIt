import React, { Children } from 'react';
import { TouchableOpacity,StyleSheet, TouchableOpacityBase ,Text} from 'react-native';
import Color from '../config/Color';


function AppButton({title,onPress,color='primary'}) {
    return (
       <TouchableOpacity style={[styles.button,{backgroundColor:Color[color]}]}>
           <Text style={styles.text} onPress={onPress}>
              {title} 
           </Text>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:Color.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:'100%',
        marginVertical:10
    },
    text:{
        color:Color.white,
        fontSize:18,
        fontWeight:'bold',
        textTransform:'uppercase'
    }
})

export default AppButton;