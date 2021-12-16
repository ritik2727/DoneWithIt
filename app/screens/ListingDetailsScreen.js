import React from 'react';
import { StyleSheet, View,Platform,StatusBar ,KeyboardAvoidingView} from 'react-native';
import AppText from '../components/AppText/AppText';
import { ListsItem } from '../components/lists';
import Color from '../config/Color'
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from './../components/ContactSellerForm'


function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
       <View styles={{ paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0}} >
           <Image style={styles.image} 
                    preview={{ uri: listing.images[0].thumbnailUrl }}
                    tint="light"
                    uri={listing.images[0].url}
            />
           <View style={styles.detailsContainer} >
               <AppText style={styles.title}>
                  {listing.title}
               </AppText>
               <AppText style={styles.subtitle}>
                   ${listing.price}
               </AppText>
               <View style={styles.userContanier} >
                   <ListsItem 
                         image={require("../assets/mosh.jpg")}
                        title='mosh the programmer'
                        subtitle='5 Listings'
                    />
               </View>
           </View>
           <ContactSellerForm listing={listing} />
       </View>
       </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight:'500'
    },
    subtitle:{
        color:Color.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
    },
    userContanier:{
        marginVertical:40
    }
})

export default ListingDetailsScreen;