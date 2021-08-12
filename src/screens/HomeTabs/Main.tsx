import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import FoodItem from '../../components/Main/FoodItem';
import Header from '../../components/Main/Header';
import NewsCarousel from '../../components/Main/NewsCarousel';
import Divider from '../../components/Shared/Divider';
import TypePicker from '../../components/Shared/TypePicker';
import { getResource } from '../../utils/api';
import { IGroup, IProductsItem } from '../../utils/types';

export default function Main() {
  // * States for groups list and selecting UID
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [selectedGroup, setSelectedGroup] = useState('');

  // * products that getted by UID
  const [products, setProducts] = useState<IProductsItem[]>([]);

  // * Getting groups and setting selected UID on initial request
  useEffect(() => {
    getResource('groups')
      .then(res => setGroups(res?.result))
      .catch(err => console.log(err));
  }, []);

  // * Getting products on selected UID changing
  useEffect(() => {
    if (selectedGroup) {
      getResource('groups?UIDGroup=' + selectedGroup)
        .then(res => setProducts(res?.result))
        .catch(err => console.log(err));
    }
  }, [selectedGroup]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      stickyHeaderIndices={[2]}>
      <Header />
      <NewsCarousel />
      <>
        <TypePicker
          itemList={groups}
          selected={selectedGroup}
          setSelected={setSelectedGroup}
        />
        <Divider />
      </>
      {products.map((product, i) => (
        <FoodItem key={i} product={product} />
      ))}
    </ScrollView>
  );
}
