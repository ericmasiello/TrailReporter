import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import WorkflowHOC from '../../components/WorkflowHOC';

export class SaveFailure extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.viewText}>Save Failure</Text>
        <View>
          <Button onPress={this.props.goTo('HOME')}>Done</Button>
        </View>
      </View>
    );
  }
}

SaveFailure.displayName = 'SaveFailure';
SaveFailure.propTypes = {
  goTo: React.PropTypes.func.isRequired
};

export default WorkflowHOC(SaveFailure);

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
