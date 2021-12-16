import React from 'react';
import { StyleSheet, View,TouchableWithoutFeedback } from 'react-native';
import Color from '../../config/Color';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color={Color.white} />
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        width:70,
        backgroundColor:Color.danger,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ListItemDeleteAction;