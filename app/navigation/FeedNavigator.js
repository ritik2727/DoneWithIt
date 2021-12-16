import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';


const Stack = createNativeStackNavigator();

const FeedNavigator = () =>(
    <Stack.Navigator mode='modal' screenOptions={{ headerShown: false }}>
         <Stack.Screen name='Listing' component={ListingsScreen} />
         <Stack.Screen name='ListingDetails' component={ListingDetailsScreen}  />
    </Stack.Navigator>
)

export default FeedNavigator;