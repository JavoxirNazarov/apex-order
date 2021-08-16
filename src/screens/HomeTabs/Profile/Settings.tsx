import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LogOutIcon from '../../../assets/icons/profile/LogOut';
import AnimatedInput from '../../../components/Profile/AnimatedInput';
import Header from '../../../components/Profile/Header';
import appStyles from '../../../constants/styles';
import { sendData } from '../../../utils/api';
import {
  getLocalData,
  removeLocalData,
  storeLocalData,
} from '../../../utils/helpers/localStorage';

export default function Settings({ navigation }: any) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getLocalData('@USER_INFO').then(localInfo => {
      if (localInfo !== null) {
        setName(localInfo?.name);
        setPhone(localInfo?.phone);
      }
    });
  }, []);

  const handlingPhoneText = (text: string) => {
    if (text.length === 7) {
    }
    setPhone(text);
  };

  const saveUser = () => {
    const body = {
      name,
      phone,
    };
    sendData('clients', body)
      .then(() => storeLocalData('@USER_INFO', body))
      .then(() => navigation.navigate('home/profile/me'))
      .catch(err => console.log(err));
  };

  const logOut = () => {
    removeLocalData('@USER_INFO');
    navigation.navigate('home/profile/me');
  };

  return (
    <View style={styles.container}>
      <Header text="Настройки">
        <Text style={[styles.exitText, styles.mlAuto]} onPress={saveUser}>
          Сохранить
        </Text>
      </Header>

      <AnimatedInput text={name} setText={setName} labelText="Имя" />
      <AnimatedInput
        text={phone}
        setText={handlingPhoneText}
        labelText="Телефон"
      />
      <TouchableOpacity style={styles.exitRow} onPress={logOut}>
        <LogOutIcon />
        <Text style={styles.exitText}>Выход</Text>
      </TouchableOpacity>
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
  exitRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exitText: {
    marginLeft: 10,
    color: appStyles.COLOR_PRIMARY,
    fontFamily: appStyles.FONT,
    fontSize: 16,
  },
  mlAuto: {
    marginLeft: 'auto',
  },
});
