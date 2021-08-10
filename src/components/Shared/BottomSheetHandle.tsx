import {BottomSheetHandleProps} from '@gorhom/bottom-sheet';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HandleIcon from '../../assets/icons/BottomSheetHandle';

type Props = {
  backgroundColor?: string;
};

export default function BottomSheetHandle({
  backgroundColor = '#F7F7F8',
}: Props | BottomSheetHandleProps) {
  return (
    <View style={[styles.handleContainer, {backgroundColor}]}>
      <HandleIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  handleContainer: {
    paddingVertical: 15,
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
