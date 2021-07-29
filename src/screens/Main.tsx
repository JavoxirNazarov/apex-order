import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Main/Header';
import NewsCarousel from '../components/Main/Carousel/NewsCarousel';
import TypePicker from '../components/Shared/TypePicker';

export default function Main() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      <NewsCarousel />
      <TypePicker />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   scroll: {},
// });
