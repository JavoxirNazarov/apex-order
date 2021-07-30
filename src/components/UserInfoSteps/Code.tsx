import React, {useRef} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import appStyles from '../../constants/styles';
import {SetUserStepType} from '../../constants/types';
import UserInfoLayout from '../Layouts/UserInfoLayout';

export type PhoneComponentProps = {
  setStepName: SetUserStepType;
};

export default function Code({setStepName}: PhoneComponentProps) {
  const handleStepName = () => setStepName('NAME');

  const [focused, setFocused] = useState(0);
  const ref0 = useRef<TextInput>(null);
  const ref1 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);

  const [text, setText] = useState({0: '1', 1: '', 2: '', 3: ''});

  const handleText = () => {};

  return (
    <UserInfoLayout handleStepName={handleStepName}>
      <>
        <Text style={styles.textContainer}>
          <Text style={styles.text1}>Введите </Text>
          <Text style={[styles.text1, styles.text2]}>код</Text>
        </Text>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>
            Введите 4-значный код, который мы отправили на
          </Text>
          <Text style={[styles.subText, styles.subTextNumber]}>
            +998 92 6542198
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref0}
            value={text?.[0]}
            autoFocus
            onChange={() => {
              ref1.current?.focus();
            }}
            onFocus={() => setFocused(0)}
            style={[styles.input, focused === 0 ? styles.input_focused : {}]}
          />
          <TextInput
            ref={ref1}
            value={text?.[1]}
            onFocus={() => setFocused(1)}
            onChange={() => {
              ref2.current?.focus();
            }}
            style={[styles.input, focused === 1 ? styles.input_focused : {}]}
          />
          <TextInput
            ref={ref2}
            value={text?.[2]}
            onChange={() => {
              ref3.current?.focus();
            }}
            onFocus={() => setFocused(2)}
            style={[styles.input, focused === 2 ? styles.input_focused : {}]}
          />
          <TextInput
            ref={ref3}
            value={text?.[3]}
            onFocus={() => setFocused(3)}
            style={[styles.input, focused === 3 ? styles.input_focused : {}]}
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
  subTextContainer: {
    alignItems: 'center',
    marginTop: 11,
    width: 155,
  },
  subText: {
    lineHeight: 18,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: appStyles.FONT_REGULAR,
    color: appStyles.FONT_COLOR_SECONDARY,
  },
  subTextNumber: {
    lineHeight: 18,
    textAlign: 'center',
    fontFamily: appStyles.FONT_BOLDER,
    color: appStyles.FONT_COLOR_SECONDARY,
  },
  inputContainer: {
    width: '100%',
    marginTop: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    width: 60,
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: appStyles.FONT_COLOR,
    borderColor: appStyles.FONT_COLOR_SECONDARY,
    borderWidth: 0.5,
    borderRadius: 10,
    textAlign: 'center',
  },
  input_focused: {
    color: appStyles.COLOR_PRIMARY,
    borderColor: appStyles.COLOR_PRIMARY,
    borderWidth: 2,
  },
});
