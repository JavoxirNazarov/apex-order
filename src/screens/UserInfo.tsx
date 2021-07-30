import React, {useMemo} from 'react';
import {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {Steps} from '../components/UserInfoSteps';
import {UserStepsType} from '../constants/types';

export default function UserInfo() {
  const [stepName, setStepName] = useState<UserStepsType>('PHONE');

  // const [phone, setPhone] = useState('');
  // const [code, setCode] = useState('');
  // const [name, setName] = useState('');

  const StepComponent = useMemo(() => Steps[stepName], [stepName]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StepComponent setStepName={setStepName} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
