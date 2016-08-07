import React from 'react';
import {StyleSheet} from 'react-native';
//https://design.google.com/icons/
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as globalStyles from '../styles/global';

const SIZES = {
  tiny: 18,
  small: 32,
  medium: 46,
  large: 58
};

export default (props) => {
  const {name, size} = props;
  return (<Icon name={name} size={SIZES[size] || SIZES.medium} color={globalStyles.TEXT_COLOR} />);
}
