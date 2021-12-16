import React from 'react';
import { StyleSheet ,Image, SafeAreaView,Platform,StatusBar, View} from 'react-native';
import Color from '../config/Color';
import { MaterialCommunityIcons } from "@expo/vector-icons";


function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeicon}>
                <MaterialCommunityIcons name='close' size={35} color='white' />
            </View>
            <View style={styles.deleteicon}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color='white' />
            </View>
        <Image 
            source={require('../assets/chair.jpg')} 
            style={styles.image} 
        />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        resizeMode: 'contain'
    },
    closeicon:{
        position:'absolute',
        top:40,
        left:30
    },
    deleteicon:{
        position:'absolute',
        top:40,
        right:30
    },
    container: {
        flex: 1,
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        // position:'absolute',
        backgroundColor:Color.black
        // justifyContent: 'center',
      },
})

export default ViewImageScreen;