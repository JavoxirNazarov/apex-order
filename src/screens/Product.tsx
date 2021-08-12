import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import ScrollLayoutWithBtn from '../components/Layouts/ScrollLayoutWithBtn';
import PreviewPhoto from '../components/Shared/PreviewPhoto';
import TypePicker from '../components/Shared/TypePicker';
import appStyles from '../constants/styles';
import { getResource } from '../utils/api';
import { IProduct } from '../utils/types';

type Props = {
  navigation: any;
  route: { params: { UID: string } };
};

export default function Product({ route }: Props) {
  const { UID } = route.params;
  const [productInfo, setProductInfo] = useState<Partial<IProduct>>({});
  // const [selectedSize, setSelectedSize] = useState('');
  const [selectedSauce, setSelectedSauce] = useState('');
  const [selectedAdditive, setSelectedAdditive] = useState('');

  useEffect(() => {
    getResource('productinfo?UIDProduct=' + UID)
      .then(res => setProductInfo(res?.result))
      .catch(err => console.log(err));
  }, [UID]);

  const sizeOptions = useMemo(() => {
    return productInfo?.productInfo?.Sizes?.map(el => ({
      label: el + ' см',
      value: el,
    }));
  }, [productInfo]);

  return (
    <ScrollLayoutWithBtn btnText="В КОРЗИНУ ЗА 73 000 сум">
      <View>
        <PreviewPhoto base64={productInfo?.productInfo?.Image} />

        <View style={styles.wrapper}>
          <Text style={styles.name}>{productInfo?.productInfo?.Product}</Text>
          <Text style={styles.description}>
            {productInfo?.productInfo?.Description}
          </Text>

          {!!sizeOptions?.length && (
            <SwitchSelector
              selectedColor="#fff"
              textColor={appStyles.FONT_COLOR_SECONDARY}
              buttonColor={appStyles.COLOR_PRIMARY}
              hasPadding
              height={50}
              style={styles.select}
              borderColor="transparent"
              valuePadding={5}
              options={sizeOptions}
              initial={0}
              onPress={(value: string) => {
                console.log(`Call onPress with value: ${value}`);
              }}
            />
          )}
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.saucesLabel}>Добавка к пицце</Text>
        </View>
        <TypePicker
          itemList={productInfo?.productInfo?.Additives}
          selected={selectedAdditive}
          setSelected={setSelectedAdditive}
        />

        <View style={styles.wrapper}>
          <Text style={styles.saucesLabel}>Соусы</Text>
        </View>
        <TypePicker
          itemList={productInfo?.productInfo?.Sauces}
          selected={selectedSauce}
          setSelected={setSelectedSauce}
        />
      </View>
    </ScrollLayoutWithBtn>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
  },
  name: {
    marginTop: 10,
    fontFamily: appStyles.FONT_BOLDER,
    color: appStyles.FONT_COLOR,
    fontSize: 22,
  },
  description: {
    marginTop: 10,
    fontFamily: appStyles.FONT_REGULAR,
    color: appStyles.FONT_COLOR_SECONDARY,
    fontSize: 16,
    lineHeight: 19,
    width: 217,
  },
  select: { marginTop: 20 },
  saucesLabel: {
    marginTop: 20,
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: appStyles.FONT_COLOR,
  },
});
