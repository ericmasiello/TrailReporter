import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import * as globalStyles from '../styles/global';

const styles = StyleSheet.create({
  button: {
    borderStyle: 'solid',
    borderColor: globalStyles.TEXT_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  largeButton: {
    paddingVertical: 18,
    paddingHorizontal: 24    
  },
  disabledButton: {
    borderColor: `${globalStyles.TEXT_COLOR}55`
  },
  text: {
    color: globalStyles.TEXT_COLOR,
    fontWeight: 'bold',
  },
  disabledText: {
    color: `${globalStyles.TEXT_COLOR}55`,
  }
});

const SIZES = {
  large: styles.largeButton
};

export default Button = (props) => {

  var {style, active, onPress, size, ...otherProps} = props;
  const buttonStyles = [styles.button, style];
  const textStyles = [styles.text];

  if(active === false){
    onPress = null;
    buttonStyles.push(styles.disabledButton);
    textStyles.push(styles.disabledText);
  };

  return (
    <TouchableOpacity
      activeOpacity={active ? .7 : 1}
      onPress={onPress}
      {...otherProps}
      style={[buttonStyles, SIZES[size]]}>
      <Text style={[textStyles]}>{props.children}</Text>
    </TouchableOpacity>
  )
};

Button.displayName = 'Button';

Button.propTypes = {
  active: React.PropTypes.bool,
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number
  ]),
  onPress: React.PropTypes.func
};
