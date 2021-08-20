import React, { memo } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import dishImg from '../../assets/image/dish.png';

export default memo(function () {
  return (
    <View style={styles.container}>
      <View style={styles.whiteCircle}>
        <Image source={dishImg} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 82,
    backgroundColor: 'transparent',
  },
  whiteCircle: {
    position: 'absolute',
    width: 123,
    height: 123,
    borderRadius: 60,
    backgroundColor: '#fff',
    transform: [{ translateY: -61.5 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
