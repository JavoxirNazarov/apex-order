import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import appStyles from '../../constants/styles';

type Props = {
  children: JSX.Element[] | JSX.Element;
  blockStyles?: ViewStyle;
};

export default function BlockWrapper({ children, blockStyles }: Props) {
  return <View style={[styles.container, blockStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    minHeight: 70,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
    paddingVertical: 10,
    marginBottom: 20,
  },
});
