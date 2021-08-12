import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch } from 'react-native';
import BlockWrapper from '../../../components/Profile/BlockWrapper';
import Header from '../../../components/Profile/Header';
import Row from '../../../components/Shared/Row';
import appStyles from '../../../constants/styles';
import { getResource } from '../../../utils/api';

export default function Addresses() {
  const [adresses, setAdresses] = useState([]);
  const [boV, setBoV] = useState(false);

  useEffect(() => {
    getResource('clients?phone=998935544798')
      .then(res => setAdresses(res?.result?.Addresses))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (val: boolean) => {
    setBoV(val);
  };

  return (
    <View style={styles.container}>
      <Header text="Адреса доставки" />

      <ScrollView style={{ flex: 1 }}>
        {adresses.map((el, i) => (
          <BlockWrapper key={i}>
            <Row>
              <Text style={styles.blockText}>{el.Address}</Text>
              <Switch
                trackColor={{
                  false: 'rgba(30, 27, 38, 0.1)',
                  true: appStyles.COLOR_PRIMARY,
                }}
                onValueChange={handleChange}
                value={boV}
              />
            </Row>
          </BlockWrapper>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: appStyles.HORIZONTAL_PADDING },
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
});
