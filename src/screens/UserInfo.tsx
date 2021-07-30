import React, {useMemo} from 'react';
import {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {Steps} from '../components/UserInfoSteps';
import {UserStepsType} from '../constants/types';

export default function UserInfo() {
  const [stepName, setStepName] = useState<UserStepsType>('PHONE');

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
