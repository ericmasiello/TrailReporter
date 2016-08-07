import React from 'react';
import {Text} from 'react-native';
import * as globalStyles from '../styles/global';

export default BaseText = (props) => {
  const {children, style, ...rest} = props;
  return (
    <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
      {props.children}
    </Text>
  )
}
BaseText.displayName = 'BaseText';
