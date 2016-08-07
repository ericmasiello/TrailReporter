import React from 'react';
import {Text} from 'react-native';
import * as globalStyles from '../styles/global';

export default function BaseText(props) {
  const {children, style, ...rest} = props;
  return (
    <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
      {children}
    </Text>
  );
}
BaseText.displayName = 'BaseText';
BaseText.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number
  ]),
  children: React.PropTypes.element.isRequired
};
