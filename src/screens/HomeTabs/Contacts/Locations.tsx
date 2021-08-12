import React, { useCallback, useMemo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import appStyles from '../../../constants/styles';
import LinearGradient from 'react-native-linear-gradient';
import TwitterIcon from '../../../assets/icons/location/Twitter';
import InstagramIcon from '../../../assets/icons/location/Instagram';
import FacebookIcon from '../../../assets/icons/location/Facebook';
import locationImg from '../../../assets/image/default-location.png';
import ContactIcon from '../../../assets/icons/tabs/Contacts';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import BottomSheetHandle from '../../../components/Shared/BottomSheetHandle';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import mapMarker from '../../../assets/icons/location/map-marker.png';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function Locations({ navigation }: Props) {
  const snapPoints = useMemo(() => ['15%', '40%', '70%'], []);

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={() =>
          navigation.navigate('home/contacts/location', { id: 1 })
        }>
        <ImageBackground style={styles.image} source={locationImg}>
          <LinearGradient
            colors={['rgba(19, 19, 19, 0)', '#131313']}
            style={styles.gradientBlock}>
            <View style={styles.imgTextWrapper}>
              <ContactIcon fill="#FFFFFF" />
              <Text style={styles.imgText}>
                22, Фергана йоли, 95А/2, 20д, {item}к
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    ),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 41.311081,
          longitude: 69.240562,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        <Marker
          coordinate={{ latitude: 41.289357, longitude: 69.256 }}
          image={mapMarker}
          title={'bobur park'}
        />
      </MapView>
      <BottomSheet
        handleComponent={BottomSheetHandle}
        index={0}
        snapPoints={snapPoints}>
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={styles.socialIcons}>
              <TwitterIcon />
              <InstagramIcon style={styles.iconSpacing} />
              <FacebookIcon />
            </View>
          )}
          data={[1, 2, 3]}
          keyExtractor={i => i.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ccc' },
  map: { flex: 1 },
  contentContainer: {
    width: '100%',
    paddingHorizontal: appStyles.HORIZONTAL_PADDING,
    paddingBottom: 120,
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconSpacing: {
    marginHorizontal: 20,
  },
  imageWrapper: {
    width: '100%',
    height: 160,
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  gradientBlock: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  imgTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  imgText: {
    marginLeft: 20,
    color: '#FFFFFF',
    fontFamily: appStyles.FONT,
    fontSize: 14,
    width: 175,
  },
});
