import React, { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import appStyles from '../../constants/styles';
import LoadingIndicator from './LoadingIndicator';

type PropsType = {
  text: string;
  fixed?: boolean;
  onPress?: () => void;
  children?: React.ReactNode;
  loading?: boolean;
};

export default memo(function AcceptFooter({
  text,
  fixed = true,
  onPress,
  children,
  loading = false,
}: PropsType) {
  return (
    <View
      style={[
        styles.acceptContainer,
        fixed ? styles.acceptContainer_fixed : {},
      ]}>
      {children}
      <TouchableOpacity
        disabled={loading}
        onPress={onPress}
        style={styles.acceptBtn}>
        {loading ? (
          <LoadingIndicator colorWhite IndicatorStyle={styles.indicator} />
        ) : (
          <Text style={styles.acceptBtnText}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  acceptContainer: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
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
  indicator: {
    marginTop: 0,
  },
  acceptBtnText: {
    color: '#fff',
    fontFamily: appStyles.FONT,
  },
});
