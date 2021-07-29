import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import appStyles from '../../../constants/styles';

interface IPropsItem {
  text: string;
  source: any;
  active?: boolean;
}

export default function Item({text, source}: IPropsItem) {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.iconContainer}>
        <Image source={source} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 116,
    width: 73,
    alignItems: 'center',
    paddingVertical: 9,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginHorizontal: 5,
    shadowColor: 'rgba(30, 27, 38, 0.04)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 20,
    elevation: 1,
  },
  item_active: {
    backgroundColor: appStyles.COLOR_PRIMARY,
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: '#F2F2F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: 12,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
  },
});
