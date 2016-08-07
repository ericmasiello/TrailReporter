import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import WorkflowHOC from '../../components/WorkflowHOC';

export class Photo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.view}>
        <Text style={styles.viewText}>This is the photo view</Text>
        <View>
          <Button onPress={this.props.goBack}>Back</Button>
          <Button onPress={this.props.goTo('SELECT_ISSUE')}>Photo</Button>
        </View>
      </View>
    );
  }
}

export default WorkflowHOC(Photo);

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
