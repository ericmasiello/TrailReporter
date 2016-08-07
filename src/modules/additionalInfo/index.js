import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdditionalInfo from './AdditionalInfo';

function mapStateToProps(){
  return {};
};

export const AdditionalInfoContainer = connect(mapStateToProps, {})(AdditionalInfo);
