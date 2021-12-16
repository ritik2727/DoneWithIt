import React from 'react'
import { View, Text,StyleSheet ,Image, TouchableHighlight, ImageComponent} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Color from '../../config/Color'
import AppText from '../AppText'


export default function ListsItem({title,subtitle,image,onPress,renderRightActions,IconComponent}) {
    return (
    <Swipeable renderRightActions={renderRightActions} >
        <TouchableHighlight underlayColor={Color.light} onPress={onPress}>
        <View style={styles.container}>
            {IconComponent}
         { image &&  <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>
                    {title}
                </AppText>
               {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>
                    {subtitle}
                </AppText>}
            </View>
            <MaterialCommunityIcons 
                name='chevron-right' 
                size={25}
                color={Color.medium}
            />
        </View>
        </TouchableHighlight>
    </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        padding:15,
        backgroundColor:Color.white
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    detailsContainer: {
        flex:1,
        marginLeft: 10,
        justifyContent: "center",
      },
    subtitle: {
        color: Color.medium,
      },
    title: {
    fontWeight: "500",
    },
})