import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AcceptFooter from '../Shared/AcceptFooter';

type PropTypes = {
  children: JSX.Element;
  btnText: string;
  onBtnPress?: () => void;
};

export default function ScrollLayoutWithBtn({
  children,
  btnText,
  onBtnPress,
}: PropTypes) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>

      <AcceptFooter fixed text={btnText} onPress={onBtnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 106,
  },
});
