import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import appStyles from '../../constants/styles';

type Props = {
  children: JSX.Element[] | JSX.Element;
  blockStyles?: ViewStyle;
};

export default function BlockWrapper({ children, blockStyles = {} }: Props) {
  return <View style={[styles.container, blockStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 70,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: appStyles.HORIZONTAL_PADDING,
    marginBottom: 20,
  },
});
