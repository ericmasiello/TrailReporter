import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default Button = (props) => {

  var {style, active, onPress, ...otherProps} = props;
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
      style={buttonStyles}>
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

const styles = StyleSheet.create({
  button: {
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  disabledButton: {
    borderColor: '#fff5'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#fff5',
  }
});
