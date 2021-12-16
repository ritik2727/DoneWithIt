import React from 'react';
import { StyleSheet, View,Modal} from 'react-native';
import AppText from '../components/AppText';
import ProgressBar from 'react-native-progress/Bar';
import Color from '../config/Color';
import LottieView from "lottie-react-native";

function UploadScreen({progress=0,visible=false,onDone}) {
  return (
    <Modal visible={visible}>
        <View style={styles.container}>
        {progress < 1 ? (
                <ProgressBar
                color={Color.primary}
                progress={progress}
                width={200}
                />
            ) : (
                <LottieView
                autoPlay
                loop={false}
                onAnimationFinish={onDone}
                source={require("../assets/animation/done.json")}
                style={styles.animation}
                />
            )}
        </View>
   </Modal>
   );
}

const styles = StyleSheet.create({
animation: {
    width: 150,
    },
  container:{
    alignItems: "center",
    flex: 1,
    justifyContent: "center", 
  }
});

export default UploadScreen;