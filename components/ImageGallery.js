import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { commonStyles } from './styles';

const { width } = Dimensions.get('window');
const imageSize = (width - 60) / 2; // Account for margins and gaps

export default function ImageGallery({ images = [] }) {
  // Create rows of 2 images each
  const createRows = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += 2) {
      const rowImages = images.slice(i, i + 2);
      rows.push(rowImages);
    }
    return rows;
  };

  const imageRows = createRows();

  return (
    <View style={commonStyles.galleryContainer}>
      {imageRows.map((rowImages, rowIndex) => (
        <View key={rowIndex} style={commonStyles.galleryRow}>
          {rowImages.map((imageSource, imageIndex) => (
            <View key={`${rowIndex}-${imageIndex}`} style={commonStyles.galleryImageContainer}>
              <Image 
                source={typeof imageSource === 'string' ? { uri: imageSource } : imageSource} 
                style={[commonStyles.galleryImage, { width: imageSize, height: imageSize }]} 
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
