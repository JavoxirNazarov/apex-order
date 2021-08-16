import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import appStyles from '../../constants/styles';
import LoadingIndicator from './LoadingIndicator';

type Props = {
  children: JSX.Element[] | JSX.Element | undefined;
  isLoading: boolean;
  isError: boolean;
  errorTextStyle?: ViewStyle;
  IndicatorStyle?: ViewStyle;
  indicatorSize?: number | 'small' | 'large' | undefined;
};

export default function QueryWrapper({
  children,
  isLoading,
  isError,
  errorTextStyle,
  IndicatorStyle,
  indicatorSize,
}: Props) {
  if (isLoading) {
    return (
      <LoadingIndicator size={indicatorSize} IndicatorStyle={IndicatorStyle} />
    );
  }

  if (isError) {
    return <Text style={[styles.errorText, errorTextStyle]}>Ошибка</Text>;
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  errorText: {
    marginTop: 20,
    fontSize: 20,
    color: 'red',
    fontFamily: appStyles.FONT,
    textAlign: 'center',
  },
});
