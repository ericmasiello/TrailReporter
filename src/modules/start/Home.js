import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import {COMMON_STYLES, BRAND_COLOR} from '../../styles/global';

export default function Home(props) {
  return (
    <View style={[COMMON_STYLES.pageContainer, COMMON_STYLES.padTop, styles.home]}>
      <Icon name='explore' size='large' />
      <Button onPress={props.reportAnIssue} size='large'>Report an issue</Button>
    </View>
  );
}

Home.displayName = 'Home';
Home.propTypes = {
  reportAnIssue: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: BRAND_COLOR,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
