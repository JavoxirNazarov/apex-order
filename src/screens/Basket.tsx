import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MinusIcon from '../assets/icons/Minus';
import PayIcon from '../assets/icons/Play';
import PlusIcon from '../assets/icons/Plus';
import ScrollLayoutWithBtn from '../components/Layouts/ScrollLayoutWithBtn';
import appStyles from '../constants/styles';
import defaultImg from '../assets/image/basket-default.png';
import PaddWrapper from '../components/Shared/PaddWrapper';

export default function Basket() {
  return (
    <ScrollLayoutWithBtn btnText="ОФОРМИТЬ ЗА 53 000 сум">
      <PaddWrapper>
        <View style={[styles.row, styles.header]}>
          <Text style={styles.title}>Корзина</Text>
          <PayIcon />
        </View>

        <View style={styles.listContainer}>
          <View style={styles.item}>
            <Image source={defaultImg} />
            <View style={styles.itemBody}>
              <Text style={styles.name}>Гавайская</Text>
              <Text style={styles.price}>53 000 сум</Text>
            </View>
            <View style={styles.itemActions}>
              <MinusIcon />
              <Text style={styles.itemActionsNumber}>1</Text>
              <PlusIcon />
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.name}>Доставка</Text>
          <Text style={styles.sum}>15 000 сум</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.name}>Скидки</Text>
          <Text style={styles.sum}>0 сум</Text>
        </View>
      </PaddWrapper>
    </ScrollLayoutWithBtn>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 32,
    paddingBottom: 20,
    borderBottomColor: appStyles.FONT_COLOR_SECONDARY,
    borderBottomWidth: 0.2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontFamily: appStyles.FONT,
    fontSize: 20,
    color: appStyles.FONT_COLOR,
  },
  listContainer: {
    borderBottomColor: appStyles.FONT_COLOR_SECONDARY,
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemActionsNumber: {
    marginHorizontal: 10,
    fontFamily: appStyles.FONT,
    fontSize: 14,
    color: appStyles.FONT_COLOR,
  },
  name: {
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: appStyles.FONT_COLOR,
  },
  price: {
    marginTop: 10,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR_SECONDARY,
  },
  sum: {
    fontFamily: appStyles.FONT,
    fontSize: 14,
    color: appStyles.FONT_COLOR_SECONDARY,
  },
});
