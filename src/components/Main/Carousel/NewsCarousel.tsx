import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import defaultImage from '../../../assets/image/default.png';
import Carousel, {PaginationLight} from 'react-native-x2-carousel';

const {width} = Dimensions.get('screen');

export default function NewsCarousel() {
  return (
    <Carousel
      pagination={PaginationLight}
      autoplay
      renderItem={() => (
        <View style={styles.block}>
          <Image
            source={defaultImage}
            style={styles.img}
            resizeMode="stretch"
          />
        </View>
      )}
      data={[1, 2, 3]}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    width,
    paddingHorizontal: 20,
  },
  img: {width: '100%', borderRadius: 20},
});
