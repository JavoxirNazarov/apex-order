import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import BlockWrapper from '../../../components/Profile/BlockWrapper';
import Header from '../../../components/Profile/Header';
import QueryWrapper from '../../../components/Shared/QueryWrapper';
import Row from '../../../components/Shared/Row';
import appStyles from '../../../constants/styles';
import { getResource } from '../../../utils/api';
import { SwipeRow } from 'react-native-swipe-list-view';
import { getLocalData } from '../../../utils/helpers/localStorage';
import DeleteIcon from '../../../assets/icons/Delete';

interface IAdress {
  street: string;
  lon: number;
  lat: number;
  main: boolean;
}

export default function Addresses() {
  const {
    data: addresses,
    isError,
    isLoading,
  } = useQuery<IAdress[]>('user-addresses', async () => {
    const phone = await getLocalData('USER_PHONE');
    if (!phone) return [];
    const response = await getResource(`clients?phone=${phone}&Address=true`);
    return response?.result;
  });

  const handleChange = () => {};

  return (
    <View style={styles.container}>
      <Header text="Адреса доставки" />

      <ScrollView style={styles.scroll}>
        <QueryWrapper
          isError={isError}
          isLoading={isLoading}
          indicatorSize="large"
          IndicatorStyle={styles.feetbackMargin}
          errorTextStyle={styles.feetbackMargin}>
          {addresses?.map((el, i) => (
            <SwipeRow
              leftOpenValue={50}
              stopLeftSwipe={50}
              disableLeftSwipe
              key={i}>
              <View
                style={{
                  borderRadius: 20,
                  height: 70,
                  width: 100,
                  backgroundColor: '#F74A4A',
                }}>
                <DeleteIcon />
              </View>

              <BlockWrapper blockStyles={{ justifyContent: 'center' }}>
                <Row>
                  <Text style={styles.blockText}>{el.street}</Text>
                  <Switch
                    trackColor={{
                      false: 'rgba(30, 27, 38, 0.1)',
                      true: appStyles.COLOR_PRIMARY,
                    }}
                    onValueChange={handleChange}
                    value={el.main}
                  />
                </Row>
              </BlockWrapper>
            </SwipeRow>
          ))}
        </QueryWrapper>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: appStyles.HORIZONTAL_PADDING },
  scroll: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
    fontSize: 24,
    marginLeft: 20,
  },
  blockText: {
    width: '50%',
    fontFamily: appStyles.FONT_REGULAR,
    color: appStyles.FONT_COLOR_SECONDARY,
    fontSize: 14,
  },
  feetbackMargin: {
    marginTop: 50,
  },
});
