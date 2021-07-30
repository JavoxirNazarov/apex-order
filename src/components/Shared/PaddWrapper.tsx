import React from 'react';
import {StyleSheet, View} from 'react-native';
import appStyles from '../../constants/styles';

type PropTypes = {
  children: JSX.Element;
};

export default function PaddWrapper({children}: PropTypes) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
  },
});
