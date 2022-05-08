import React from 'react';
import { StyleSheet ,SafeAreaView,View ,Platform,Text,Image,ImageBackground,StatusBar} from 'react-native';
import AppButton from '../components/AppButton';
import Color from '../config/Color';


function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground blurRadius={10} source={require('../assets/background.jpg')} style={styles.Imgbackground}>
         <SafeAreaView style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <Text style={styles.tagline}>Shell What you Don't Need</Text>
        </SafeAreaView>
        <View style={styles.ButtonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate('Login')} />
        <AppButton title='Register'  color='secondary' onPress={()=>navigation.navigate('Register')}/>
        </View>
            
     </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Imgbackground:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    tagline:{
        fontSize:25,
        fontWeight:'600',
        paddingVertical:20

    },
    ButtonContainer:{
        width:'100%',
        padding:10,
    },
    logo:{
        width:100,
        height:100,
    },
    container: {
        // flex: 1,
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        position:'absolute',
        top:70
        // justifyContent: 'center',
      },
    
})

export default WelcomeScreen;