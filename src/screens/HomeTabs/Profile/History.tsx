import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import RefreshIcon from '../../../assets/icons/profile/Refresh';
import BlockWrapper from '../../../components/Profile/BlockWrapper';
import Header from '../../../components/Profile/Header';
import Row from '../../../components/Shared/Row';
import appStyles from '../../../constants/styles';

export default function History() {
  return (
    <View style={styles.container}>
      <Header text="История заказов" />
      <ScrollView style={{ flex: 1 }}>
        <Row containerStyle={styles.refreshRow}>
          <Text>30.07.2021</Text>
          <RefreshIcon />
        </Row>
        <BlockWrapper>
          <Row containerStyle={styles.blockRow}>
            <Text style={styles.blockText}>Гавайская</Text>
            <Text style={styles.blockText}>x1</Text>
          </Row>
          <Row containerStyle={styles.blockRow}>
            <Text style={styles.blockText}>Гавайская</Text>
            <Text style={styles.blockText}>x1</Text>
          </Row>
          <Row containerStyle={styles.blockRow}>
            <Text style={styles.blockText}>Гавайская</Text>
            <Text style={styles.blockText}>x1</Text>
          </Row>
        </BlockWrapper>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: appStyles.HORIZONTAL_PADDING },
  refreshRow: {
    marginVertical: 10,
  },
  blockRow: {
    marginBottom: 20,
  },
  blockText: {
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
    fontSize: 16,
  },
});
