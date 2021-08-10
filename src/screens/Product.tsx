import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArrowBackIcon from '../assets/icons/ArrowBack';
import appStyles from '../constants/styles';
import SwitchSelector from 'react-native-switch-selector';
import TypePicker from '../components/Shared/TypePicker';
import ScrollLayoutWithBtn from '../components/Layouts/ScrollLayoutWithBtn';
import BackBtn from '../components/Shared/BackBtn';

const options = [
  {label: '25 см', value: '25'},
  {label: '30 см', value: '30'},
  {label: '35 см', value: '35'},
];

export default function Product() {
  return (
    <ScrollLayoutWithBtn btnText="В КОРЗИНУ ЗА 73 000 сум">
      <View>
        <View style={styles.imageContainer}>
          <BackBtn />
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.name}>Гавайская</Text>
          <Text style={styles.size}>Маленькая 25 см</Text>
          <Text style={styles.ingrdients}>
            Цыпленок, Красный Соус, Моцарелла, Гауда, Ананасы
          </Text>

          <SwitchSelector
            selectedColor="#fff"
            textColor={appStyles.FONT_COLOR_SECONDARY}
            buttonColor={appStyles.COLOR_PRIMARY}
            hasPadding
            height={50}
            style={{marginTop: 20}}
            borderColor="transparent"
            valuePadding={5}
            options={options}
            initial={0}
            onPress={(value: string) => {
              console.log(`Call onPress with value: ${value}`);
            }}
          />
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.saucesLabel}>Добавка к пицце</Text>
        </View>
        <TypePicker />

        <View style={styles.wrapper}>
          <Text style={styles.saucesLabel}>Соусы</Text>
        </View>
        <TypePicker />
      </View>
    </ScrollLayoutWithBtn>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: 250,
    backgroundColor: '#ccc',
    position: 'relative',
  },
  wrapper: {
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
  },
  name: {
    marginTop: 10,
    fontFamily: appStyles.FONT_BOLDER,
    color: appStyles.FONT_COLOR,
    fontSize: 22,
  },
  size: {
    marginTop: 10,
    fontFamily: appStyles.FONT_REGULAR,
    color: 'rgba(30, 27, 38, 0.3)',
    fontSize: 14,
  },
  ingrdients: {
    marginTop: 10,
    fontFamily: appStyles.FONT_REGULAR,
    color: appStyles.FONT_COLOR_SECONDARY,
    fontSize: 16,
    lineHeight: 19,
    width: 217,
  },
  saucesLabel: {
    marginTop: 20,
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: appStyles.FONT_COLOR,
  },
});
