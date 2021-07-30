import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import appStyles from '../../../constants/styles';

interface IPropsItem {
  text: string;
  source: any;
  active?: boolean;
}

export default function Item({text, source, active = false}: IPropsItem) {
  return (
    <TouchableOpacity style={[styles.item, active ? styles.item_active : {}]}>
      <View
        style={[
          styles.iconContainer,
          active ? styles.iconContainer_active : {},
        ]}>
        <Image source={source} />
      </View>
      <Text style={[styles.text, active ? styles.text_active : {}]}>
        {text}
      </Text>
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
    shadowOpacity: 1.0,
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
  iconContainer_active: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 12,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
  },
  text_active: {
    color: '#fff',
  },
});
