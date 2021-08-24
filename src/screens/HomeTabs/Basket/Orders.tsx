import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MinusIcon from '../../../assets/icons/Minus';
import PayIcon from '../../../assets/icons/Play';
import PlusIcon from '../../../assets/icons/Plus';
import BottomSheet from '../../../components/Basket/BottomSheetModal';
import MyOrders from '../../../components/Basket/MyOrders';
import ScrollLayoutWithBtn from '../../../components/Layouts/ScrollLayoutWithBtn';
import PaddWrapper from '../../../components/Shared/PaddWrapper';
import Row from '../../../components/Shared/Row';
import appStyles from '../../../constants/styles';
import {
  decrementProduct,
  incrementProduct,
  refreshOrderState,
} from '../../../redux/slices/order-slice';
import { RootState } from '../../../redux/store';
import { sendData } from '../../../utils/api';
import { getLocalData } from '../../../utils/helpers/localStorage';
import moment from 'moment';
import { NavigationType } from '../../../utils/types';

export default function Orders({
  navigation,
  route,
}: {
  navigation: NavigationType;
  route: { params: { initialOrder: boolean } };
}) {
  const dispatch = useDispatch();
  const { initialOrder } = route?.params;
  const { products, address, orderDate } = useSelector(
    (state: RootState) => state.orderSlice,
  );
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [orderType, setOrderType] = useState('false');
  const [paymentType, setPaymentType] = useState('');
  // * CREATING ORDERS STATES

  const openBottomSheet = useCallback(async () => {
    const userPhone = await getLocalData('USER_PHONE');
    if (userPhone) {
      bottomSheetModalRef.current?.present();
    } else {
      navigation.navigate('authorization', { fromBasket: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  useEffect(() => {
    if (initialOrder) openBottomSheet();
  }, [initialOrder, openBottomSheet]);

  const changeOrderType = (val: string) => {
    setOrderType(val);
    setPaymentType('');
  };

  const orderPrice = useMemo(() => {
    return (
      products.reduce((acc, curr) => {
        return acc + curr.Amount * curr.Price;
      }, 0) + 15000
    );
  }, [products]);

  const order = async () => {
    const Phone = await getLocalData('USER_PHONE');

    const orderBody = {
      Goods: products,
      UIDPayment: paymentType,
      Pickup: orderType,
      Address: address,
      Phone,
      PickupTime: moment(orderDate).format('YYYYMMDDHHmmss'),
      UIDStructure: '716174b8-af8f-11ea-9e54-502b73d5e1bd',
    };
    sendData('orders', orderBody)
      .then(res => {
        closeBottomSheet();
        dispatch(refreshOrderState());
        navigation.navigate('order', { UID: res?.result });
      })
      .catch(err => console.log(err.message));
  };

  return (
    <>
      <ScrollLayoutWithBtn
        onBtnPress={() => {
          products.length ? openBottomSheet() : navigation.navigate('home');
        }}
        btnText={
          'ОФОРМИТЬ ЗА' + (products.length ? ` ${orderPrice} сум` : 'КАЗ')
        }>
        <PaddWrapper>
          <View style={styles.container}>
            <MyOrders />

            <Row containerStyle={styles.header}>
              <Text style={styles.title}>Корзина</Text>
              <PayIcon />
            </Row>
            {!!products.length && (
              <>
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
                        <MinusIcon
                          onPress={() => dispatch(decrementProduct(i))}
                        />
                        <Text style={styles.itemActionsNumber}>
                          {el.Amount}
                        </Text>
                        <PlusIcon
                          onPress={() => dispatch(incrementProduct(i))}
                        />
                      </View>
                    </Row>
                  ))}
                </View>

                <Row containerStyle={styles.row}>
                  <Text style={styles.name}>Доставка</Text>
                  <Text style={styles.sum}>15 000 сум</Text>
                </Row>
              </>
            )}
          </View>
        </PaddWrapper>
      </ScrollLayoutWithBtn>
      <BottomSheet
        orderType={orderType}
        changeOrderType={changeOrderType}
        paymentType={paymentType}
        setPaymentType={setPaymentType}
        bottomSheetModalRef={bottomSheetModalRef}
        orderPrice={orderPrice}
        navigation={navigation}
        closeBottomSheet={closeBottomSheet}
        order={order}
      />
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
