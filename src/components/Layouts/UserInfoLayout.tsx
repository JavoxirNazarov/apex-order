import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CencelIcon from '../../assets/icons/Cencel';
import appStyles from '../../constants/styles';
import { ChildrenType } from '../../utils/types';
import AcceptFooter from '../Shared/AcceptFooter';
import PaddWrapper from '../Shared/PaddWrapper';

type PropsType = {
  children: ChildrenType;
  handleNextStep: () => void;
  onBackPress: () => void;
};

export default function UserInfoLayout({
  children,
  handleNextStep,
  onBackPress,
}: PropsType) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backCircle}>
        <CencelIcon />
      </TouchableOpacity>

      <PaddWrapper>{children}</PaddWrapper>

      <AcceptFooter onPress={handleNextStep} text="Далее" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backCircle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 40,
    height: 40,
    position: 'absolute',
    top: appStyles.HORIZONTAL_PADDING,
    left: appStyles.HORIZONTAL_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});
