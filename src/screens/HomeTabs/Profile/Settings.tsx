import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedInput from '../../../components/Profile/AnimatedInput';
import Header from '../../../components/Profile/Header';
import appStyles from '../../../constants/styles';

export default function Settings() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  return (
    <View style={styles.container}>
      <Header text="Настройки" />
      <AnimatedInput text={name} setText={setName} labelText="Имя" />
      <AnimatedInput text={phone} setText={setPhone} labelText="Телефон" />
      <AnimatedInput text={mail} setText={setMail} labelText="E-mail" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: appStyles.HORIZONTAL_PADDING },
  inputContainer: {
    marginVertical: 14,
    height: 70,
    flexDirection: 'row',
    borderColor: 'rgba(30, 27, 38, 0.15)',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  labelText: {
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: 'rgba(30, 27, 38, 0.15)',
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
    paddingHorizontal: 2,
    zIndex: -10,
    position: 'absolute',
    left: 20,
  },
});
