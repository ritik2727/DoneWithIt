import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Color from '../config/Color';
import { Image } from "react-native-expo-image-cache";
import AppText from './AppText/AppText';
import OfflineNotice from './OfflineNotice';

function Card({title,subTitle,imageUrl,onPress,thumbnailUrl}) {
    return (
    
    <TouchableWithoutFeedback onPress={onPress}>
       <View style={styles.card}>
           <Image 
                style={styles.image} 
                uri={imageUrl}  
                preview={{ uri: thumbnailUrl }}
                tint="light"
            />
           <View style={styles.detailsContainer} >
               <AppText style={styles.title} numberOfLine={1}>
                   {title}
                </AppText>
               <AppText style={styles.subTitle} numberOfLine={2}>
                   {subTitle}
                </AppText>
           </View>
       </View>
    </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:Color.white,
        marginBottom:20,
        overflow:'hidden'
    },
    detailsContainer:{
        padding:20,
    },
    image:{
        width:'100%',
        height:200
    },
    subTitle:{
        color:Color.secondary,
        fontWeight:'bold',
    },
    title:{
        marginBottom:7
    }
})

export default Card;