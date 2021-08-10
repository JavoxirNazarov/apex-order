import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheetHandle from '../../../components/Shared/BottomSheetHandle';
import PaddWrapper from '../../../components/Shared/PaddWrapper';
import appStyles from '../../../constants/styles';

export default function Owner() {
  return (
    <View style={styles.container}>
      <View style={styles.img}></View>
      <View style={styles.textBlock}>
        <BottomSheetHandle backgroundColor="#fff" />
        <PaddWrapper>
          <Text style={styles.name}>Фергана йоли </Text>
          <Text style={styles.address}>22, Фергана йоли, 95А/2, 20д, 6к</Text>
          <Text style={styles.time}>с 7:00 - до 3:30</Text>
        </PaddWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  img: {
    position: 'relative',
    width: '100%',
    height: 308,
    backgroundColor: '#ccc',
    marginBottom: -20,
  },
  textBlock: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    marginTop: 40,
    fontSize: 20,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
  },
  address: {
    marginTop: 15,
    fontSize: 16,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR_SECONDARY,
  },
  time: {
    marginTop: 40,
    fontSize: 18,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
  },
});
