import React,{useEffect,useState} from 'react';
import { StyleSheet, TouchableWithoutFeedback, View,Image,Alert} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from './Screen';
import Color from '../config/Color';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({imageUri,onChangeImage}) {
   
    const requestPermission= async ()=>{
      const {granted} = await ImagePicker.requestCameraPermissionsAsync();
      if(!granted){
        alert('You need to enable permission to access the libery')
      }
    }
  useEffect(() => {
    requestPermission();
  
  }, [])
  
  const selectImage = async () =>{
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          quality:0.5
      });
      if(!result.cancelled){
       onChangeImage(result.uri)
      }
    } catch (error) {
      console.log('Error reading an image' ,error)
    }
  }
  const handlePress = () =>{
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={Color.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
   </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
  container:{
      width:100,
      backgroundColor:Color.light,
      alignItems:'center',
      marginVertical:10,
      justifyContent:'center',
      borderRadius:15,
      height:100,
      overflow:'hidden'
  },
  image:{
      width:'100%',
      height:'100%'
  }
});

export default ImageInput;