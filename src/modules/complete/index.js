import {connect} from 'react-redux';
import SaveSuccess from './SaveSuccess';
import SaveFailure from './SaveFailure';

function mapStateToProps() {
  return {};
}

export const SaveSuccessContainer = connect(mapStateToProps, {})(SaveSuccess);
export const SaveFailureContainer = connect(mapStateToProps, {})(SaveFailure);
