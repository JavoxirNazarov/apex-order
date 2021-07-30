import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default memo(function Divider() {
  return (
    <LinearGradient
      colors={[
        'rgba(30, 27, 38, 0)',
        'rgba(30, 27, 38, 0.15)',
        'rgba(30, 27, 38, 0)',
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.divider}
    />
  );
});

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: 201,
    marginVertical: 20,
    alignSelf: 'center',
  },
});
