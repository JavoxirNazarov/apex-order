import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appStyles from '../../constants/styles';

type PropsType = {
  text: string;
};

export default memo(function AcceptFooter({text}: PropsType) {
  return (
    <View style={styles.acceptContainer}>
      <TouchableOpacity style={styles.acceptBtn}>
        <Text style={styles.acceptBtnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  acceptContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#F7F7F8',
    height: 80,
    paddingVertical: 15,
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
    shadowColor: 'rgba(30, 27, 38, 0.05)',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    elevation: 1,
    shadowOpacity: 1.0,
  },
  acceptBtn: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: appStyles.COLOR_PRIMARY,
  },
  acceptBtnText: {
    color: '#fff',
    fontFamily: appStyles.FONT,
  },
});
