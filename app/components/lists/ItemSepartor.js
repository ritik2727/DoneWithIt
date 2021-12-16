import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Color from '../../config/Color';


function ItemSepartor(props) {
    return (
       <View style={styles.separtor} />
    );
}
const styles = StyleSheet.create({
    separtor:{
        width:'100%',
        height:1,
        backgroundColor:Color.light
    }
})
export default ItemSepartor;