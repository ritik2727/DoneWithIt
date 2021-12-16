import React, { useState } from 'react';
import { FlatList, StyleSheet, View,Text } from 'react-native';
import Screen from '../components/Screen';
import {
    ListsItem,
    ListItemDeleteAction,
    ItemSepartor,
  } from "../components/lists";

const initialMessages =[
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/mosh.jpg"),
  },
]

function MessageScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = (message)=>{
        setMessages( messages.filter((m)=> m.id !== message.id))
    }
    return (
    <Screen >
        <FlatList 
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => (
              < ListsItem
                 title={item.title}
                 subtitle={item.description}
                 image={item.image}
                 onPress={()=>console.log('messgae',item)}
                 renderRightActions={()=>(
                     <ListItemDeleteAction onPress={()=>handleDelete(item)} />
                 )}
               />
             )}
             ItemSeparatorComponent={ItemSepartor}
             refreshing={refreshing}
             onRefresh={() => {
                setMessages([
                  {
                    id: 2,
                    title: "T2",
                    description: "D2",
                    image: require("../assets/mosh.jpg"),
                  },
                ]);
              }}
        />
    
    </Screen>
    );
}
const styles = StyleSheet.create({
    
})

export default MessageScreen;


