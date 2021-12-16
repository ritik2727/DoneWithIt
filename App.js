import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import { navigationRef } from './app/navigation/rootNavigation';
import authStorage from "./app/auth/storage";

import logger from './app/utility/logger';

logger.start();
export default function App() {

  const [user,setUser] = useState();

  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
  return (
    <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)}  onError={console.warn} />
  );


  return(
    <>
    <AuthContext.Provider value={{user,setUser}}>
      <OfflineNotice />
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>

    {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    </AuthContext.Provider>
  </>
    );
 
}


