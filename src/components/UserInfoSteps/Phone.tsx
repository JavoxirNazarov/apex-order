import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import appStyles from '../../constants/styles';
import {SetUserStepType} from '../../constants/types';
import UserInfoLayout from '../Layouts/UserInfoLayout';

export type PhoneComponentProps = {
  setStepName: SetUserStepType;
};

export default function Phone({setStepName}: PhoneComponentProps) {
  const handleStepName = () => setStepName('CODE');

  return (
    <UserInfoLayout handleStepName={handleStepName}>
      <>
        <Text style={styles.textContainer}>
          <Text style={styles.text1}>Для оформления заказа</Text>
          <Text style={[styles.text1, styles.text2]}> нужен ваш телефон</Text>
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>+998</Text>
          <View style={styles.inputDivider} />
          <TextInput style={[styles.inputText, styles.input]} />
        </View>
      </>
    </UserInfoLayout>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: 100,
    textAlign: 'center',
  },
  text1: {
    fontFamily: appStyles.FONT_BOLDER,
    color: appStyles.FONT_COLOR,
    fontSize: 24.7,
  },
  text2: {
    color: appStyles.COLOR_PRIMARY,
  },
  inputContainer: {
    marginTop: 110,
    height: 70,
    flexDirection: 'row',
    borderColor: appStyles.FONT_COLOR_SECONDARY,
    borderWidth: 0.5,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputText: {
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: appStyles.FONT_COLOR,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  inputDivider: {
    height: 42,
    width: 0.5,
    backgroundColor: appStyles.FONT_COLOR_SECONDARY,
    marginHorizontal: appStyles.HORIZONTAL_PADDING,
  },
});
