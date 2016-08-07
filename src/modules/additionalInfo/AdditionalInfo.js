import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import WorkflowHOC from '../../components/WorkflowHOC';

export class AdditionalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.view}>
        <Text style={styles.viewText}>This is the additional info view</Text>
        <View>
          <Button onPress={this.props.goBack}>Back</Button>
          <Button onPress={this.props.goTo('SAVE_SUCCESS')}>Next</Button>
        </View>
      </View>
    );
  }
}

export default WorkflowHOC(AdditionalInfo);

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewText: {
    color: 'white'
  }
});
