import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import BlockWrapper from '../../../components/Profile/BlockWrapper';
import Header from '../../../components/Profile/Header';
import QueryWrapper from '../../../components/Shared/QueryWrapper';
import Row from '../../../components/Shared/Row';
import appStyles from '../../../constants/styles';
import { getResource } from '../../../utils/api';

export default function Addresses() {
  const {
    data: addresses,
    isError,
    isLoading,
  } = useQuery<{ Address: string; Main: boolean }[]>(
    'user-addresses',
    async () => {
      const response = await getResource('clients?phone=935544798');
      return response?.result?.Addresses;
    },
  );

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
            <BlockWrapper key={i}>
              <Row>
                <Text style={styles.blockText}>{el.Address}</Text>
                <Switch
                  trackColor={{
                    false: 'rgba(30, 27, 38, 0.1)',
                    true: appStyles.COLOR_PRIMARY,
                  }}
                  onValueChange={handleChange}
                  value={el.Main}
                />
              </Row>
            </BlockWrapper>
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
