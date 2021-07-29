import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../components/Main/Header';
import NewsBlock from '../components/Main/NewsBlock';
import TypePicker from '../components/Shared/TypePicker';

export default function Main() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      <NewsBlock />
      <TypePicker />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   scroll: {},
// });
