import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowBackIcon from '../assets/icons/ArrowBack';

export default function Product() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.backBtn}>
          <ArrowBackIcon />
        </TouchableOpacity>
      </View>
      <Text>Гавайская</Text>
      <Text>Маленькая 25 см</Text>
      <Text>Цыпленок, Красный Соус, Моцарелла, Гауда, Ананасы</Text>
      <View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: 250,
    backgroundColor: '#ccc',
    position: 'relative',
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
});
