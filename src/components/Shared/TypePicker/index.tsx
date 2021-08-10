import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Item from './Item';

import pizzaImg from '../../../assets/image/categories/pizza.png';
import waterImg from '../../../assets/image/categories/water.png';
import snackImg from '../../../assets/image/categories/snack.png';
import dessertImg from '../../../assets/image/categories/dessert.png';
import appStyles from '../../../constants/styles';

export default function TypePicker() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}>
      <Item text="Пицца" source={pizzaImg} active />
      <Item text="Напитки" source={waterImg} />
      <Item text="Закуски" source={snackImg} />
      <Item text="Десерт" source={dessertImg} />
      <Item text="Пицца" source={pizzaImg} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
    paddingTop: 20,
  },
  content: {paddingHorizontal: 15},
});
