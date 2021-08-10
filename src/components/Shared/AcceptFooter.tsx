import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appStyles from '../../constants/styles';

type PropsType = {
  text: string;
  fixed?: boolean;
  onPress: () => void;
  children?: React.ReactNode;
};

export default memo(function AcceptFooter({
  text,
  fixed,
  onPress,
  children,
}: PropsType) {
  return (
    <View
      style={[
        styles.acceptContainer,
        fixed ? styles.acceptContainer_fixed : {},
      ]}>
      {children}
      <TouchableOpacity onPress={onPress} style={styles.acceptBtn}>
        <Text style={styles.acceptBtnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  acceptContainer: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: '#F7F7F8',
    paddingVertical: 15,
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
  },
  acceptContainer_fixed: {
    position: 'absolute',
    bottom: 0,
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
    height: 50,
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
