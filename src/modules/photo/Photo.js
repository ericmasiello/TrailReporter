import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import WorkflowHOC from '../../components/WorkflowHOC';
import {COMMON_STYLES, BRAND_COLOR} from '../../styles/global';

export class Photo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={[COMMON_STYLES.pageContainer, styles.view]}>
        <View>
          <LinkButton onPress={this.props.goBack}>Back</LinkButton>
          <Button onPress={this.props.goTo('SELECT_ISSUE')}>Photo</Button>
        </View>
      </View>
    );
  }
}

export default WorkflowHOC(Photo);

const styles = StyleSheet.create({
  view: {
    backgroundColor: BRAND_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
