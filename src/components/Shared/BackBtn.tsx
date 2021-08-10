import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ArrowBackIcon from '../../assets/icons/ArrowBack';

export default memo(function BackBtn() {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <TouchableOpacity style={styles.backBtn} onPress={goBack}>
      <ArrowBackIcon />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
