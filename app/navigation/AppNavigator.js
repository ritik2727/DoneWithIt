import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React , {useEffect} from 'react';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import AccountNavigator from './AccountNavigation';
import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from './NewListingButton';
import useNotification from '../hooks/useNotification';


const Tab = createBottomTabNavigator();

const AppNavigator = ()=> {
  useNotification();
    return (
      <Tab.Navigator screenOptions={{
          headerShown:false
      }}>
          <Tab.Screen 
            name='Feed' 
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}

            />
          <Tab.Screen 
            name="ListingEdit" 
            component={ListingEditScreen} 
            options={({ navigation }) => ({
              tabBarButton: () => (
                <NewListingButton
                  onPress={() => navigation.navigate('ListingEdit')}
                />
              ),
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="plus-circle"
                  color={color}
                  size={size}
                />
              ),
            })}
            />
          <Tab.Screen name="Account" component={AccountNavigator} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='account' color={color} size={size} />
            ),
          }}
          />
      </Tab.Navigator>
    );
}

export default AppNavigator;