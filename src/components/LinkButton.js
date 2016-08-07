import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Button from './Button';

export default LinkButton = (props) => {
  var {style, ...otherProps} = props;
  const buttonStyles = [styles.button, style];

  return (
    <Button
      {...otherProps}
      style={buttonStyles}>
      {props.children}
    </Button>
  )
};

LinkButton.displayName = 'LinkButton';
LinkButton.propTypes = {
  style: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
    React.PropTypes.number
  ])
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  }
});
