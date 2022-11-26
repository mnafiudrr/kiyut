import { Text, StyleSheet, Image, TouchableOpacity, TextProps } from 'react-native';
import React, { useMemo } from 'react';
import { darkColor } from '../utils/colors/dark-color';

type AppTextProps = TextProps & {
  children?: React.ReactNode
  font?: string,
  semiBold?: boolean,
  bold?: boolean,
  color?: 'primary'|'secondary',
};


export default function AppText({
  style, font, semiBold, bold, children, color, ...props
}: AppTextProps) {
  const flatStyle = useMemo(() => {
    const {fontWeight, ...values} = StyleSheet.flatten(style ?? {});
    return {fontWeight, values};
  }, [style]);

  const family = useMemo(() => {
    const styleBold = flatStyle.fontWeight === 'bold';
    return `${font}${(bold || styleBold) ? '_bold' : ''}${semiBold ? '_semibold' : ''}`;
  }, [flatStyle.fontWeight, font, bold, semiBold]);

  const fontColor = () => {
    if (color === 'primary') return darkColor.text.primary;
    else return darkColor.text.secondary;
  }

  return (
    <Text
      style={[{ color: fontColor() },
      flatStyle.values]}
      {...props}
    >
      {children}
    </Text>
  );
}


AppText.defaultProps = {
  font: 'segoe',
  semiBold: false,
  bold: false,
  children: '',
  color: 'primary',
};
