import React,{useState} from 'react';
import { TextInput, View ,Platform, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons";
import Color from '../config/Color';
import defaultStyles from '../config/Styles';
import Screen from './Screen';
import AppText from './AppText/AppText';
import PickerItem from './PickerItem';

function AppPicker({
    icon,
    placeholder,
    items,
    onSelectItem, 
    numberOfColumns=1,
    PickerItemComponent = PickerItem,
    selectedItem,
    width= "100%"
}) {
    const [visibleModal,setVisibleModal] = useState(false);

    return (
    <>
        <TouchableWithoutFeedback onPress={()=>{setVisibleModal(true)}} >
        <View style={[styles.conatiner, {width}]}>
            <MaterialCommunityIcons 
            name={icon} 
            size={25} 
            color={Color.medium}
            style={styles.icon} 
            />
              {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

            <MaterialCommunityIcons 
            name='chevron-down'
            size={20} 
            color={Color.medium} 
            />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={visibleModal} animationType='slide'>
            <Screen>
            <Button title='close' onPress={() => setVisibleModal(false)} />
            <FlatList 
                data={items}
                keyExtractor={(item) => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({item})=>(
                   <PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={()=>{
                            setVisibleModal(false);
                            onSelectItem(item);
                        }}
                   />
                )}
             />

            </Screen>
        </Modal>
    </>
    );
}
const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:Color.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon:{
        marginRight:10
    },
    placeholder: {
        color:Color.medium,
        flex: 1,
      },
    text:{
        flex:1
    }
})

export default AppPicker;