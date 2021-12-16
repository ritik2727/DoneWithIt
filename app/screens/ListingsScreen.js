import React, { useState,useEffect } from 'react';
import {  FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import Color from '../config/Color';
import listingsApi from '../api/listings';
import AppButton from '../components/AppButton'
import AppText from '../components/AppText';
import AccountNavigator from '../navigation/AccountNavigation';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';
import OfflineNotice from '../components/OfflineNotice';



function ListingsScreen({navigation}) {
  
const getListingsApi = useApi(listingsApi.getListings);
 
    useEffect(() => {
    getListingsApi.request();
    }, [])

    return (
        <>
        <OfflineNotice />
        <ActivityIndicator vissible={getListingsApi.loading} />
        <Screen style={styles.screen}>
            {getListingsApi.error && (
                <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton title="Retry" onPress={getListingsApi.request} />
                </>
            )}
            <FlatList
                data={getListingsApi.data}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({item})=>(
                    <Card  title={item.title} 
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={()=> navigation.navigate('ListingDetails',item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                )}
                />
        </Screen>
        </>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:Color.light,
        padding: 20,
    }
})

export default ListingsScreen;