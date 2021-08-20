import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { VibrancyView } from '@react-native-community/blur';
import React, { RefObject, useMemo } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ContactIcon from '../../assets/icons/tabs/Contacts';
import appStyles from '../../constants/styles';
import AcceptFooter from '../Shared/AcceptFooter';
import PaddWrapper from '../Shared/PaddWrapper';
import Row from '../Shared/Row';
import cashIcon from '../../assets/icons/basket/cash-icon.png';
import clickIcon from '../../assets/icons/basket/click-icon.png';
import paymeIcon from '../../assets/icons/basket/payme-icon.png';
import PlusBigIcon from '../../assets/icons/basket/Plus';
import therminalIcon from '../../assets/icons/basket/therminal-icon.png';
import BottomSheetHandle from '../Shared/BottomSheetHandle';
import { useQuery } from 'react-query';
import { getResource } from '../../utils/api';
import QueryWrapper from '../Shared/QueryWrapper';
import MySwitchSelector from '../Shared/MySwitchSelector';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SettingState } from '../../utils/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const paymentsRender = (namePayment: string) => {
  switch (namePayment) {
    case 'Payme':
      return paymeIcon;
    case 'Click':
      return clickIcon;
    case 'Оплата наличными':
      return cashIcon;
    case 'Оплата терминалом':
      return therminalIcon;
    default:
      return cashIcon;
  }
};

type PaymenyType = {
  UIDPayment: string;
  Name: string;
};

type Props = {
  orderType: string;
  changeOrderType: (val: string) => void;
  paymentType: string;
  setPaymentType: (val: string) => void;
  orderDate: Date;
  setOrderDate: SettingState<Date>;
  orderPrice: number;
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  closeBottomSheet: () => void;
  navigation: any;
  order: () => void;
};

export default function BottomSheet({
  orderType,
  changeOrderType,
  paymentType,
  setPaymentType,
  orderDate,
  setOrderDate,
  orderPrice,
  bottomSheetModalRef,
  closeBottomSheet,
  navigation,
  order,
}: Props) {
  const { address } = useSelector((state: RootState) => state.orderSlice);
  const snapPoints = useMemo(() => ['45%', '62%'], []);

  const {
    data: payments,
    isError,
    isLoading,
  } = useQuery<PaymenyType[]>(['payments', orderType], async () => {
    const response = await getResource(`payments?pickup=${orderType}`);
    return response?.result;
  });

  const onTimePick = (_: any, selectedDate: any) => {
    const currentDate = selectedDate || orderDate;
    setOrderDate(currentDate);
  };

  return (
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
        contentContainerStyle={sheetStyles.scroll}
        style={sheetStyles.container}
        showsVerticalScrollIndicator={false}>
        <PaddWrapper>
          <Text style={sheetStyles.headText}>Доставка</Text>
          <TouchableOpacity
            onPress={() => {
              closeBottomSheet();
              navigation.navigate('map');
            }}>
            <Row containerStyle={sheetStyles.addingBlock}>
              <Text style={sheetStyles.addingBlockText}>
                Добавить адрес доставки
              </Text>
              <View style={sheetStyles.addingBlockBtn}>
                <PlusBigIcon />
              </View>
            </Row>
          </TouchableOpacity>

          {address?.street && (
            <View style={sheetStyles.locationBlock}>
              <ContactIcon
                opacity={0.5}
                width={15}
                height={18}
                fill={appStyles.FONT_COLOR}
              />
              <Text style={sheetStyles.locationBlockText}>
                {address?.street}
              </Text>
            </View>
          )}
          <MySwitchSelector
            options={[
              { label: 'Доставка', value: 'false' },
              { label: 'Самовывоз', value: 'true' },
            ]}
            selectFunc={changeOrderType}
            switchStyle={sheetStyles.switch}
          />

          {orderType === 'true' && (
            <>
              <Text style={sheetStyles.labelText}>Время приезда </Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={orderDate}
                mode={'time'}
                is24Hour={true}
                display="spinner"
                style={{ height: 150 }}
                locale="ru-RU"
                onChange={onTimePick}
              />
            </>
          )}

          <Text style={sheetStyles.labelText}>Cпособ оплаты</Text>
        </PaddWrapper>

        <QueryWrapper isLoading={isLoading} isError={isError}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={sheetStyles.paymentTypeContainer}
            contentContainerStyle={sheetStyles.paymentTypeConentContainer}>
            {payments?.map((payment, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setPaymentType(payment?.UIDPayment)}
                style={[
                  sheetStyles.paymentTypeItem,
                  paymentType == payment?.UIDPayment
                    ? sheetStyles.paymentTypeContainer_active
                    : {},
                ]}>
                <Image source={paymentsRender(payment?.Name)} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </QueryWrapper>
      </BottomSheetScrollView>
      <AcceptFooter fixed text="ОФОРМИТЬ ЗАКАЗ" onPress={order}>
        <Row>
          <Text style={sheetStyles.labelText}>Стоимость заказа</Text>
          <Text style={sheetStyles.labelText}>{orderPrice} сум</Text>
        </Row>
      </AcceptFooter>
    </BottomSheetModal>
  );
}

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
  scroll: {
    paddingBottom: 150,
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
    paddingHorizontal: 20,
  },
  locationBlockText: {
    marginLeft: 20,
    color: appStyles.FONT_COLOR,
    fontFamily: appStyles.FONT,
    fontSize: 14,
    width: 175,
    opacity: 0.5,
  },
  switch: {
    marginBottom: 20,
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
  paymentTypeContainer_active: {
    backgroundColor: appStyles.COLOR_PRIMARY,
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
