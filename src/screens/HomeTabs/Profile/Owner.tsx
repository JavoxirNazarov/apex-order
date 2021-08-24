import React, { useCallback, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import BottomSheetHandle from '../../../components/Shared/BottomSheetHandle';
import PaddWrapper from '../../../components/Shared/PaddWrapper';
import appStyles from '../../../constants/styles';
import profileBackground from '../../../assets/image/profile-background.png';
import userImg from '../../../assets/image/user-img.png';
import SettingsIcon from '../../../assets/icons/profile/Settings';
import ClockIcon from '../../../assets/icons/profile/Clock';
import ArrowIcon from '../../../assets/icons/Arrow';
import ContactIcon from '../../../assets/icons/tabs/Contacts';
import { useFocusEffect } from '@react-navigation/native';
import { getLocalData } from '../../../utils/helpers/localStorage';
import CustomBottomSheet from '../../../components/Shared/CustomBottomSheet';
import { NavigationType } from '../../../utils/types';

export default function Owner({ navigation }: { navigation: NavigationType }) {
  const [registered, setRegistered] = useState(true);

  useFocusEffect(
    useCallback(() => {
      getLocalData('USER_PHONE').then(user => {
        setRegistered(user !== null);
      });
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.imgBlock}>
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() =>
            navigation.navigate('profile', {
              screen: 'user-settings',
            })
          }>
          <SettingsIcon />
        </TouchableOpacity>
        <ImageBackground
          source={profileBackground}
          style={styles.imgWrapper}
          resizeMode="stretch">
          <Image source={userImg} />
        </ImageBackground>
      </View>

      <CustomBottomSheet handleComponent={<BottomSheetHandle />}>
        <PaddWrapper>
          {registered ? (
            <>
              <TouchableOpacity
                style={styles.row}
                onPress={() =>
                  navigation.navigate('profile', {
                    screen: 'user-history',
                  })
                }>
                <View style={styles.rowIconWraper}>
                  <ClockIcon />
                </View>
                <Text style={styles.name}>История заказов</Text>
                <ArrowIcon style={styles.arrowRight} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.row}
                onPress={() =>
                  navigation.navigate('profile', {
                    screen: 'user-addresses',
                  })
                }>
                <View style={styles.rowIconWraper}>
                  <ContactIcon width={15.3} height={18} fill="#1E1B26" />
                </View>
                <Text style={styles.name}>Адреса доставки</Text>
                <ArrowIcon style={styles.arrowRight} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                navigation.navigate('authorization', { fromBasket: false })
              }>
              <View style={styles.rowIconWraper}>
                <ContactIcon width={15.3} height={18} fill="#1E1B26" />
              </View>
              <Text style={styles.name}>Зарегистрироватся</Text>
              <ArrowIcon style={styles.arrowRight} />
            </TouchableOpacity>
          )}
        </PaddWrapper>
      </CustomBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imgBlock: {
    position: 'relative',
    width: '100%',
    height: 330,
    backgroundColor: '#fff',
    marginBottom: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsBtn: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
    shadowColor: 'rgba(30, 27, 38, 0.04)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 1,
  },
  imgWrapper: {
    width: 308,
    height: 142,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  rowIconWraper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: 'rgba(30, 27, 38, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  arrowRight: { marginLeft: 'auto', marginTop: 2 },
  name: {
    fontSize: 16,
    fontFamily: appStyles.FONT,
    color: appStyles.FONT_COLOR,
  },
});
