import React, { useContext } from 'react';
import Screen from '../components/Screen';
import { ListsItem,ItemSepartor } from '../components/lists';
import { StyleSheet, View,FlatList ,Platform,StatusBar} from 'react-native';
import Icon from '../components/Icon';
import usersApi from "../api/user";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import Color from '../config/Color';
import routes from '../navigation/routes';


const menuItem =[
    {
        title:'My Listings',
        icon:{
            name:'format-list-bulleted',
            backgroundColor:Color.primary
        }
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor:Color.secondary
        },
        targetScreen:routes.MESSAGES,
    },
]

function AccountScreen({navigation}) {
    const { user, logOut } = useAuth();

    return (
      <Screen style={styles.screen}>
        <View style={styles.container} >
        <ListsItem 
            title={user.name}
            subtitle={user.email}
            image={require("../assets/mosh.jpg")}
        />
        </View>
        <View style={styles.container}>
        <FlatList 
            data={menuItem} 
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ItemSepartor}
            renderItem={({ item }) => (
            < ListsItem
            title={item.title}
            IconComponent={
                <Icon name={item.icon.name}  backgroundColor={item.icon.backgroundColor} />
            }
            onPress={()=>navigation.navigate(item.targetScreen)}
            />
        
        )}
        />
        </View>
         <ListsItem 
            title='Log Out'
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            onPress={()=>logOut()}
        />
      </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:Color.light,
    },
    container:{
        marginVertical:20
    }
})

export default AccountScreen;