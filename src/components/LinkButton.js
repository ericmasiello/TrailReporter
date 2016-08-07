import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Button from './Button';

export default function LinkButton(props) {
  var {children, style, ...otherProps} = props;
  const buttonStyles = [styles.button, style];

  return (
    <Button
      {...otherProps}
      style={buttonStyles}>
      {children}
    </Button>
  );
}

LinkButton.displayName = 'LinkButton';
LinkButton.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number
  ]),
  children: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    backgroundColor: 'transparent'
  }
});
