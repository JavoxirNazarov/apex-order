import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import appStyles from '../../constants/styles';
import { SetUserStepType } from '../../constants/types';
import { SettingState } from '../../utils/types';
import UserInfoLayout from '../Layouts/UserInfoLayout';

export type PhoneComponentProps = {
  setStepName: SetUserStepType;
  phone: string;
  setPhone: SettingState<string>;
};

export default function Phone({
  setStepName,
  phone,
  setPhone,
}: PhoneComponentProps) {
  const navigation = useNavigation();
  const handleNextStep = () => setStepName('CODE');
  const goBack = () => navigation.goBack();

  return (
    <UserInfoLayout handleNextStep={handleNextStep} onBackPress={goBack}>
      <>
        <Text style={styles.textContainer}>
          <Text style={styles.text1}>Для оформления заказа</Text>
          <Text style={[styles.text1, styles.text2]}> нужен ваш телефон</Text>
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>+998</Text>
          <View style={styles.inputDivider} />
          <TextInput
            onChangeText={setPhone}
            defaultValue={phone}
            style={[styles.inputText, styles.input]}
          />
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
    borderColor: 'rgba(30, 27, 38, 0.15)',
    borderWidth: 1,
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
