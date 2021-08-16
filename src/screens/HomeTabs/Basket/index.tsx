import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { VibrancyView } from '@react-native-community/blur';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import cashIcon from '../../../assets/icons/basket/cash-icon.png';
import clickIcon from '../../../assets/icons/basket/click-icon.png';
import PlusBigIcon from '../../../assets/icons/basket/Plus';
import therminalIcon from '../../../assets/icons/basket/therminal-icon.png';
import MinusIcon from '../../../assets/icons/Minus';
import PlusIcon from '../../../assets/icons/Plus';
import PayIcon from '../../../assets/icons/Play';
import ContactIcon from '../../../assets/icons/tabs/Contacts';
import ScrollLayoutWithBtn from '../../../components/Layouts/ScrollLayoutWithBtn';
import AcceptFooter from '../../../components/Shared/AcceptFooter';
import BottomSheetHandle from '../../../components/Shared/BottomSheetHandle';
import PaddWrapper from '../../../components/Shared/PaddWrapper';
import appStyles from '../../../constants/styles';
import Row from '../../../components/Shared/Row';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  decrementProduct,
  incrementProduct,
} from '../../../redux/slices/basket-slice';
import { getLocalData } from '../../../utils/helpers/localStorage';

export default function Basket({ navigation, route }: any) {
  const dispatch = useDispatch();
  const { initialOrder } = route?.params;
  const { products } = useSelector((state: RootState) => state.basketState);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['45%', '60%'], []);

  useEffect(() => {
    if (initialOrder) bottomSheetModalRef.current?.present();
  }, [initialOrder]);

  const handlePresentModalPress = useCallback(() => {
    getLocalData('@USER_INFO').then(value => {
      if (value !== null) {
        bottomSheetModalRef.current?.present();
      } else {
        navigation.navigate('user-info');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const orderPrice = useMemo(() => {
    return products.reduce((acc, curr) => {
      return acc + curr.Amount * curr.Price;
    }, 0);
  }, [products]);

  return (
    <>
      <ScrollLayoutWithBtn
        onBtnPress={handlePresentModalPress}
        btnText={`ОФОРМИТЬ ЗА ${orderPrice} сум`}>
        <PaddWrapper>
          <View style={styles.container}>
            <Row containerStyle={styles.header}>
              <Text style={styles.title}>Корзина</Text>
              <PayIcon />
            </Row>

            <View style={styles.listContainer}>
              {products.map((el, i) => (
                <Row key={i} containerStyle={styles.item}>
                  <Image
                    style={styles.itemImage}
                    source={{ uri: 'data:image/png;base64, ' + el?.Image }}
                  />
                  <View style={styles.itemBody}>
                    <Text style={styles.name}>{el.Product}</Text>
                    <Text style={styles.price}>{el?.Price} сум</Text>
                  </View>
                  <View style={styles.itemActions}>
                    <MinusIcon onPress={() => dispatch(decrementProduct(i))} />
                    <Text style={styles.itemActionsNumber}>{el.Amount}</Text>
                    <PlusIcon onPress={() => dispatch(incrementProduct(i))} />
                  </View>
                </Row>
              ))}
            </View>

            <Row containerStyle={styles.row}>
              <Text style={styles.name}>Доставка</Text>
              <Text style={styles.sum}>15 000 сум</Text>
            </Row>

            <Row containerStyle={styles.row}>
              <Text style={styles.name}>Скидки</Text>
              <Text style={styles.sum}>0 сум</Text>
            </Row>
          </View>
        </PaddWrapper>
      </ScrollLayoutWithBtn>
      <BottomSheetModal
        handleComponent={BottomSheetHandle}
        backdropComponent={() => (
          <VibrancyView
            blurType="dark"
            style={sheetStyles.gradientBackdrop}
            blurAmount={1}
          />
        )}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}>
        <BottomSheetScrollView
          contentContainerStyle={{ paddingBottom: 150 }}
          style={sheetStyles.container}
          showsVerticalScrollIndicator={false}>
          <PaddWrapper>
            <Text style={sheetStyles.headText}>Доставка</Text>
            <Row containerStyle={sheetStyles.addingBlock}>
              <Text style={sheetStyles.addingBlockText}>
                Добавить адрес доставки
              </Text>
              <View style={sheetStyles.addingBlockBtn}>
                <PlusBigIcon />
              </View>
            </Row>
            <View style={sheetStyles.locationBlock}>
              <ContactIcon width={15} height={18} fill={appStyles.FONT_COLOR} />
              <Text style={sheetStyles.locationBlockText}>
                22, Фергана йоли, 95А/2, 20д, 6к
              </Text>
            </View>
            <Text style={sheetStyles.labelText}>Cпособ оплаты</Text>
          </PaddWrapper>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={sheetStyles.paymentTypeContainer}
            contentContainerStyle={sheetStyles.paymentTypeConentContainer}>
            <TouchableOpacity style={sheetStyles.paymentTypeItem}>
              <Image source={cashIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={sheetStyles.paymentTypeItem}>
              <Image source={therminalIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={sheetStyles.paymentTypeItem}>
              <Image source={clickIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={sheetStyles.paymentTypeItem}>
              <Image source={clickIcon} />
            </TouchableOpacity>
          </ScrollView>
        </BottomSheetScrollView>
        <AcceptFooter fixed text="ОФОРМИТЬ ЗАКАЗ" onPress={() => {}}>
          <Row>
            <Text style={sheetStyles.labelText}>Стоимость заказа</Text>
            <Text style={sheetStyles.labelText}>112 000 сум</Text>
          </Row>
        </AcceptFooter>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    marginTop: 32,
    paddingBottom: 20,
    borderBottomColor: appStyles.FONT_COLOR_SECONDARY,
    borderBottomWidth: 0.2,
  },
  row: {
    marginVertical: 10,
  },
  title: {
    fontFamily: appStyles.FONT,
    fontSize: 20,
    color: appStyles.FONT_COLOR,
  },
  listContainer: {
    borderBottomColor: appStyles.FONT_COLOR_SECONDARY,
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    marginBottom: 10,
  },
  item: {
    marginVertical: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemActionsNumber: {
    marginHorizontal: 10,
    fontFamily: appStyles.FONT,
    fontSize: 14,
    color: appStyles.FONT_COLOR,
  },
  name: {
    fontFamily: appStyles.FONT,
    fontSize: 16,
    color: appStyles.FONT_COLOR,
  },
  price: {
    marginTop: 10,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR_SECONDARY,
  },
  sum: {
    fontFamily: appStyles.FONT,
    fontSize: 14,
    color: appStyles.FONT_COLOR_SECONDARY,
  },
});

const sheetStyles = StyleSheet.create({
  gradientBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
  },
  headText: {
    fontSize: 20,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
    marginBottom: 20,
  },
  addingBlock: {
    height: 60,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: appStyles.FONT_COLOR_SECONDARY,
    marginBottom: 20,
  },
  addingBlockText: {
    color: appStyles.COLOR_PRIMARY,
    fontSize: 16,
    fontFamily: appStyles.FONT,
    marginLeft: 20,
  },
  addingBlockBtn: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: appStyles.COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationBlock: {
    width: '100%',
    height: 60,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    opacity: 0.5,
    paddingHorizontal: 20,
  },
  locationBlockText: {
    marginLeft: 20,
    color: appStyles.FONT_COLOR,
    fontFamily: appStyles.FONT,
    fontSize: 14,
    width: 175,
  },
  labelText: {
    fontSize: 16,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
    marginBottom: 20,
  },
  paymentTypeContainer: {
    width: '100%',
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
  },
  paymentTypeConentContainer: {
    paddingHorizontal: 15,
  },
  paymentTypeItem: {
    paddingVertical: 10,
    paddingHorizontal: 19,
    backgroundColor: '#F2F2F4',
    borderRadius: 200,
    marginHorizontal: 5,
  },
});
