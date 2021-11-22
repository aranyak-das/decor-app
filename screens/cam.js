import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio, Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [video, setVideo] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      
      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermission(audioStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');

    })()
  }, []);

  const takeVideo = async() => {

    if (camera) {
      try {
          const options = { maxDuration: 500, quality: Camera.Constants.VideoQuality['480'] }
          const videoRecordPromise = camera.recordAsync(options)
          if (videoRecordPromise) {
              const data = await videoRecordPromise;
              // const source = data.uri
              setVideo(data.uri);
          }
      } catch (error) {
          console.warn(error)
      }
  }
}

const stopVideo = async () => {
  if (camera) {
      camera.stopRecording()
  }
}

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1,1],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={ styles.cameraContainer }>
        <Camera
        ref={ ref => setCamera(ref) }
          style={ styles.fixedRatio } 
          type={type}
          ratio={'1:1'}/>
      </View>

      <Button
        title="Flip Image"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}>
      </Button>

      <Button title="Capture" onPress={() => takeVideo() }/>
      <Button title="Stop" onPress={() => stopVideo() }/>
      {/* {<Button title="Pick from Gallery" onPress={() => pickImage() }/> */}
      { video && <Video source={{uri: video}} style={{flex: 1}} /> }

    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    backgroundColor: 'black',
    aspectRatio: 1,
  }
})