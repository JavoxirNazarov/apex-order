import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Steps } from '../components/UserInfoSteps';
import { NavigationType, UserStepsType } from '../utils/types';
import { sendData } from '../utils/api';
import { storeLocalData } from '../utils/helpers/localStorage';

export default function UserInfo({
  navigation,
  route,
}: {
  navigation: NavigationType;
  route: { params: { fromBasket: boolean } };
}) {
  const { fromBasket } = route.params;
  const [stepName, setStepName] = useState<UserStepsType>('PHONE');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');

  const endingAuthorization = () => {
    const body = {
      name,
      phone,
    };
    sendData('clients', body)
      .then(() => storeLocalData('USER_PHONE', phone))
      .then(() => storeLocalData('USER_NAME', name))
      .then(() => {
        fromBasket
          ? navigation.navigate('basket', {
              screen: 'orders',
              params: {
                initialOrder: true,
              },
            })
          : navigation.navigate('home');
      })
      .catch(err => console.log(err));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Steps
        stepName={stepName}
        setStepName={setStepName}
        phone={phone}
        setPhone={setPhone}
        code={code}
        setCode={setCode}
        name={name}
        setName={setName}
        endingAuthorization={endingAuthorization}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
