import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from '../../constants/styles';
import { setIsInitialOrder, setName } from '../../redux/slices/auth-slice';
import { RootState } from '../../redux/store';
import UserInfoLayout from '../../components/Layouts/UserInfoLayout';
import { sendData } from '../../utils/api';

export type PhoneComponentProps = {
  navigation: any;
};

export default function Name({ navigation }: PhoneComponentProps) {
  const dispatch = useDispatch();
  const { name, phone, isInitialOrder } = useSelector(
    (state: RootState) => state.auth,
  );

  const handlePrevStep = () => navigation.push('auth-code');

  const endingAuthorization = () => {
    const body = {
      name,
      phone,
    };
    sendData('clients', body)
      .then(() => {
        if (isInitialOrder) {
          dispatch(setIsInitialOrder(false));
          navigation.navigate('basket', {
            screen: 'orders',
            params: {
              initialOrder: true,
            },
          });
        } else {
          navigation.navigate('home');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <UserInfoLayout
      handleNextStep={endingAuthorization}
      onBackPress={handlePrevStep}>
      <Text style={styles.textContainer}>
        <Text style={styles.text1}>Как вас </Text>
        <Text style={[styles.text1, styles.text2]}>зовут?</Text>
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          defaultValue={name}
          onChangeText={text => dispatch(setName(text))}
        />
      </View>
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
