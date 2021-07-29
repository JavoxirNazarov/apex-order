import React from 'react';
import {FlatList} from 'react-native';
import FoodItem from '../components/Main/FoodItem';
import Header from '../components/Main/Header';
import NewsCarousel from '../components/Main/NewsCarousel';
import Divider from '../components/Shared/Divider';
import TypePicker from '../components/Shared/TypePicker';

export default function Main() {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          <Header />
          <NewsCarousel />
          <TypePicker />
          <Divider />
        </>
      )}
      data={[1, 2, 3]}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={() => <FoodItem />}
      keyExtractor={(_, i) => i.toString()}
    />
  );
}
