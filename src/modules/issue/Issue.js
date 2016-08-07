import React, {Component} from 'react';
import {View, ListView, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import BaseText from '../../components/BaseText';
import WorkflowHOC from '../../components/WorkflowHOC';
import {COMMON_STYLES, BRAND_COLOR} from '../../styles/global';

export class Issue extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    return (
      <View style={[COMMON_STYLES.pageContainer, styles.view]}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <BaseText>{rowData}</BaseText>} />
        <View style={COMMON_STYLES.buttonBar}>
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
    backgroundColor: BRAND_COLOR
  }
});
