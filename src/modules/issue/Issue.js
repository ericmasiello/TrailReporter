import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import WorkflowHOC from '../../components/WorkflowHOC';

export class Issue extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.viewText}>This is the issue view</Text>
        <View>
          <LinkButton onPress={this.props.goBack}>Back</LinkButton>
          <Button onPress={this.props.goTo('ADDITIONAL_INFO')}>Next</Button>
        </View>
      </View>
    );
  }
}

Issue.displayName = 'Issue';
Issue.propTypes = {
  goTo: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired
};

export default WorkflowHOC(Issue);

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
