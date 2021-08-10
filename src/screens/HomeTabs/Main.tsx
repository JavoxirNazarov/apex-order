import React from 'react';
import {ScrollView} from 'react-native';
import FoodItem from '../../components/Main/FoodItem';
import Header from '../../components/Main/Header';
import NewsCarousel from '../../components/Main/NewsCarousel';
import Divider from '../../components/Shared/Divider';
import TypePicker from '../../components/Shared/TypePicker';

export default function Main({navigation}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      stickyHeaderIndices={[2]}>
      <Header />
      <NewsCarousel />
      <TypePicker />
      <Divider />
      <FoodItem onPress={() => navigation.navigate('product')} />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
    </ScrollView>
  );
}

// <FlatList
//   showsVerticalScrollIndicator={false}
//   // stickyHeaderIndices={[0]}
//   ListHeaderComponent={() => (
//     <>
//       <Header />
//       <NewsCarousel />
//       <TypePicker />
//       <Divider />
//     </>
//   )}
//   data={[1, 2, 3, 4, 5, 6]}
//   contentInsetAdjustmentBehavior="automatic"
//   renderItem={() => <FoodItem />}
//   keyExtractor={(_, i) => i.toString()}
// />
