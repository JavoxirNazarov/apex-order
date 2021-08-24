import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import appStyles from '../../constants/styles';
import { SettingState, SetUserStepType } from '../../utils/types';
import UserInfoLayout from '../Layouts/UserInfoLayout';

export type PhoneComponentProps = {
  setStepName: SetUserStepType;
  name: string;
  setName: SettingState<string>;
  endingAuthorization: () => void;
};

export default function Name({
  setStepName,
  name,
  setName,
  endingAuthorization,
}: PhoneComponentProps) {
  const handlePrevStep = () => setStepName('CODE');

  return (
    <UserInfoLayout
      handleNextStep={endingAuthorization}
      onBackPress={handlePrevStep}>
      <>
        <Text style={styles.textContainer}>
          <Text style={styles.text1}>Как вас </Text>
          <Text style={[styles.text1, styles.text2]}>зовут?</Text>
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            defaultValue={name}
            onChangeText={setName}
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
  input: {
    flex: 1,
    height: '100%',
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: appStyles.FONT_COLOR,
  },
});
