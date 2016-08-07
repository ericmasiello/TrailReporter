import {connect} from 'react-redux';
import Photo from './Photo';

function mapStateToProps() {
  return {};
}

export const PhotoContainer = connect(mapStateToProps, {})(Photo);
