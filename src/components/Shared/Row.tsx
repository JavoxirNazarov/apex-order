import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  children: JSX.Element[] | JSX.Element;
  containerStyle?: ViewStyle;
};

export default function Row({ children, containerStyle }: Props) {
  return <View style={[styles.row, containerStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
