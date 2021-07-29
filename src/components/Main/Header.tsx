import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BarIcon from '../../assets/icons/Bar';
import CallIcon from '../../assets/icons/Call';
import appStyles from '../../constants/styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <BarIcon />
      <Text style={styles.name}>apexpizza</Text>
      <CallIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 30,
    fontFamily: 'Comfortaa-Bold',
    color: appStyles.FONT_COLOR,
  },
});
