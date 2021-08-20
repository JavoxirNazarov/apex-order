import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BackBtn from '../../../components/Shared/BackBtn';
import CustomBottomSheet from '../../../components/Shared/CustomBottomSheet';
import PaddWrapper from '../../../components/Shared/PaddWrapper';
import HandleWithImg from '../../../components/Basket/HandleWithImg';
import BlockWrapper from '../../../components/Profile/BlockWrapper';
import Row from '../../../components/Shared/Row';
import appStyles from '../../../constants/styles';
import CallIcon from '../../../assets/icons/Call';
import StepIndicator from 'react-native-step-indicator';
import CheckedIcon from '../../../assets/icons/CheckedIcon';

const labels = ['Принято', 'Готовится', 'Доставка', 'Complete'];
const customStyles = {
  stepIndicatorSize: 26,
  currentStepIndicatorSize: 34,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: appStyles.COLOR_PRIMARY,
  stepStrokeUnFinishedColor: '#D8D7DA',
  separatorFinishedColor: appStyles.COLOR_PRIMARY,
  separatorUnFinishedColor: '#D8D7DA',
  stepIndicatorFinishedColor: appStyles.COLOR_PRIMARY,
  stepIndicatorUnFinishedColor: '#D8D7DA',
  stepIndicatorCurrentColor: appStyles.COLOR_PRIMARY,
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: appStyles.FONT_COLOR_SECONDARY,
  labelSize: 10,
  currentStepLabelColor: appStyles.FONT_COLOR,
};

export default function Order({ route, navigation }: any) {
  const [currentStep, setCurrentStep] = useState(2);
  const { UID } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.mapBackground}>
        <BackBtn fixed />
      </View>
      <CustomBottomSheet handleComponent={<HandleWithImg />}>
        <ScrollView>
          <>
            <View style={{ alignItems: 'center', marginBottom: 25 }}>
              <Text style={styles.timeText}>11:20 - 11:55</Text>
            </View>

            <View style={{ marginBottom: 25 }}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={currentStep}
                stepCount={4}
                labels={labels}
                renderStepIndicator={({ stepStatus }) => {
                  return stepStatus === 'unfinished' ? (
                    <View style={styles.unfinishedStepIndicator} />
                  ) : (
                    <CheckedIcon />
                  );
                }}
              />
            </View>

            <PaddWrapper>
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
              <BlockWrapper blockStyles={styles.courierBlock}>
                <Row containerStyle={{ height: 70 }}>
                  <View
                    style={{ height: '100%', justifyContent: 'space-evenly' }}>
                    <Text style={styles.curierName}>Тимур Одилов</Text>
                    <Text style={styles.courierWork}>Курьер</Text>
                  </View>
                  <CallIcon fill={appStyles.COLOR_PRIMARY} />
                </Row>
              </BlockWrapper>

              <BlockWrapper>
                <Text>Оцените нас</Text>
                <Text>Моцарелла, Гауда, Соус Итальянский, Томаты, Базилик</Text>
              </BlockWrapper>
            </PaddWrapper>
          </>
        </ScrollView>
      </CustomBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timeText: {
    fontFamily: appStyles.FONT_REGULAR,
    color: appStyles.FONT_COLOR,
    fontSize: 20,
  },
  unfinishedStepIndicator: {
    width: 6,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  mapBackground: {
    height: 230,
    backgroundColor: '#ccc',
    marginBottom: -10,
  },
  blockRow: {
    marginVertical: 10,
  },
  blockText: {
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
    fontSize: 16,
  },
  courierBlock: {
    justifyContent: 'center',
  },
  curierName: {
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
    fontSize: 14,
  },
  courierWork: {
    fontFamily: appStyles.FONT_REGULAR,
    color: appStyles.FONT_COLOR_SECONDARY,
    fontSize: 14,
  },
  unactive: {
    opacity: 0.5,
  },
});
