import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import defaultPizza from '../../assets/image/default-pizza.png';
import appStyles from '../../constants/styles';

type Props = {
  onPress: () => void;
};

export default function FoodItem({onPress}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={defaultPizza} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Мангал (35 см)</Text>
        <Text style={styles.body}>
          Оливковое масло, моцарелла, курица барбекю, фета, крем чиз, соус,
          базилик, пармезан, чеснок.
        </Text>
        <View style={styles.btn}>
          <Text style={styles.btnText}>180 000 сум</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
    marginTop: 30,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
    marginBottom: 11,
  },
  body: {
    fontSize: 12,
    fontFamily: appStyles.FONT_REGULAR,
    color: appStyles.FONT_COLOR_SECONDARY,
    marginBottom: 11,
    lineHeight: 15,
  },
  btn: {
    width: 99,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 124, 33, 0.2)',
    borderRadius: 100,
  },
  btnText: {
    fontFamily: appStyles.FONT,
    color: appStyles.COLOR_PRIMARY,
  },
});
