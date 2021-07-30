import React from 'react';
import {StyleSheet, View} from 'react-native';
import CencelIcon from '../../assets/icons/Cencel';
import appStyles from '../../constants/styles';
import AcceptFooter from '../Shared/AcceptFooter';
import PaddWrapper from '../Shared/PaddWrapper';

type PropsType = {
  children: JSX.Element;
  handleStepName: () => void;
};

export default function UserInfoLayout({children, handleStepName}: PropsType) {
  return (
    <View style={styles.container}>
      <View style={styles.backCircle}>
        <CencelIcon />
      </View>
      <PaddWrapper>{children}</PaddWrapper>

      <AcceptFooter onPress={handleStepName} text="ОФОРМИТЬ ЗА 53 000 сум" />
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
  },
});
