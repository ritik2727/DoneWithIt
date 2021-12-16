import React from 'react';
import { StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

function ActivityIndicator({vissible=false}) {
    if(!vissible) return null;
  return (
    <View style={styles.overlay}>
    <LottieView 
        autoPlay
        loop
        source={require('../assets/animation/loader.json')}
    />
    </View>
   );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;