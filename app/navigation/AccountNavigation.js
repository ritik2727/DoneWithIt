import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import AccountScreen from '../screens/AccountScreen';

import MessageScreen from '../screens/MessageScreen';


const Stack = createNativeStackNavigator();

const AccountNavigator = () =>(
    <Stack.Navigator>
         <Stack.Screen name='AccountN' component={AccountScreen} />
         <Stack.Screen name='Messages' component={MessageScreen}  />
    </Stack.Navigator>
)

export default AccountNavigator;