import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import defaultImage from '../../assets/image/default.png';
import Carousel, {Pagination} from 'react-native-x2-carousel';

export default function NewsBlock() {
  return (
    <View style={styles.block}>
      <Carousel
        pagination={Pagination}
        renderItem={() => (
          <Image
            source={defaultImage}
            style={styles.img}
            resizeMode="stretch"
          />
        )}
        data={[{}, {}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {flex: 1, borderRadius: 20},
});
