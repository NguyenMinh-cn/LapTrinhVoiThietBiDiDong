import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
  // cho phép truyền string (uri) hoặc object ImageSourcePropType
  selectedImage?: string | ImageSourcePropType;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource: ImageSourcePropType = selectedImage
    ? typeof selectedImage === 'string'
      ? { uri: selectedImage }
      : selectedImage
    : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
