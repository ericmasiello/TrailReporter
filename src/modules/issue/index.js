import {connect} from 'react-redux';
import Issue from './Issue';

function mapStateToProps() {
  return {};
}

export const IssueContainer = connect(mapStateToProps, {})(Issue);
