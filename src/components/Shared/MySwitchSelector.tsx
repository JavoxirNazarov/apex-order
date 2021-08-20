import React from 'react';
import { ViewStyle } from 'react-native';
import SwitchSelector, {
  ISwitchSelectorOption,
} from 'react-native-switch-selector';
import appStyles from '../../constants/styles';

type Props = {
  selectFunc: (val: string) => void;
  options: ISwitchSelectorOption[];
  switchStyle: ViewStyle;
};

export default function MySwitchSelector({
  selectFunc,
  options,
  switchStyle,
}: Props) {
  return options?.length ? (
    <SwitchSelector
      selectedColor="#fff"
      textColor={appStyles.FONT_COLOR_SECONDARY}
      buttonColor={appStyles.COLOR_PRIMARY}
      hasPadding
      height={50}
      style={switchStyle}
      borderColor="transparent"
      valuePadding={5}
      options={options}
      initial={0}
      onPress={(value: string) => selectFunc(value)}
    />
  ) : null;
}
