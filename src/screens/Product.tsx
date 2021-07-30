import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowBackIcon from '../assets/icons/ArrowBack';
import appStyles from '../constants/styles';
import SwitchSelector from 'react-native-switch-selector';
import TypePicker from '../components/Shared/TypePicker';

const options = [
  {label: '25 см', value: '25'},
  {label: '30 см', value: '30'},
  {label: '35 см', value: '35'},
];

export default function Product() {
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      contentInsetAdjustmentBehavior="automatic">
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.backBtn}>
          <ArrowBackIcon />
        </TouchableOpacity>
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
          onPress={value => console.log(`Call onPress with value: ${value}`)}
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

      <View style={styles.acceptContainer}>
        <View style={styles.acceptBtn}>
          <Text style={styles.acceptBtnText}>В КОРЗИНУ ЗА 73 000 сум</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    height: 250,
    backgroundColor: '#ccc',
    position: 'relative',
  },
  wrapper: {
    paddingHorizontal: 20,
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
  acceptContainer: {
    backgroundColor: '#E5E5E5',
    marginTop: 40,
    flex: 1,
    height: 80,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: 'rgba(30, 27, 38, 0.05)',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    elevation: 1,
    shadowOpacity: 1.0,
  },
  acceptBtn: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: appStyles.COLOR_PRIMARY,
  },
  acceptBtnText: {
    color: '#fff',
    fontFamily: appStyles.FONT,
  },
});
