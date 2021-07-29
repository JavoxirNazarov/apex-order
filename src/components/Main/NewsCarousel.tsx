import React, {useState} from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import defaultImage from '../../assets/image/default-news.png';
import Carousel, {PaginationLight} from 'react-native-x2-carousel';

const {width} = Dimensions.get('screen');

type dataType = {
  num: number;
};

export default function NewsCarousel() {
  const [data, setData] = useState<dataType[]>([{num: 1}, {num: 2}]);

  return (
    <Carousel
      pagination={PaginationLight}
      autoplay
      renderItem={(item: dataType) => (
        <View key={item.num} style={styles.block}>
          <Image
            source={defaultImage}
            style={styles.img}
            resizeMode="stretch"
          />
        </View>
      )}
      data={data}
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
