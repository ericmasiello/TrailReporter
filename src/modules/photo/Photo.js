import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Camera from 'react-native-camera';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import WorkflowHOC from '../../components/WorkflowHOC';
import Icon from '../../components/Icon';
import {COMMON_STYLES, BRAND_COLOR, BG_COLOR} from '../../styles/global';

export class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {capturedPhoto: false};
    this.capturePhoto = this.capturePhoto.bind(this);
  }
  capturePhoto() {
    console.log('capturing photo');
    this.setState({capturedPhoto: true}); //FIXME: REMOVE ME LATER
    //debugger;
    this.cam.capture({
      target: Camera.constants.CaptureTarget.disk
    }, (err, filePath) => {
      console.log('Got into capture', filePath);
      //debugger;
      if (err) {
        return;
      }
      //FIXME: Need to display the photo to the user before progressing...
      //this.setState({capturedPhoto: true}); //FIXME: Uncomment me when wired up
      //this.props.savePhotoActionCreator(filePath);
    });
  }
  render() {
    //debugger
    return (
      <View style={[COMMON_STYLES.pageContainer, styles.view]}>
        <Camera
          ref={(c) => {this.cam = c;}}
          type='cameraType: Camera.constants.Type.back'
          style={styles.camera}
          aspect={Camera.constants.Aspect.Fill} />
        <View style={COMMON_STYLES.buttonBar}>
          <LinkButton onPress={this.props.goBack}>Back</LinkButton>
          <TouchableOpacity onPress={this.capturePhoto}>
            <Icon name={this.state.capturedPhoto ? 'check' : 'camera'} />
          </TouchableOpacity>
          <LinkButton onPress={this.props.goTo('SELECT_ISSUE')}>Skip</LinkButton>
        </View>
      </View>
    );
  }
}

Photo.displayName = 'Photo';
Photo.propTypes = {
  goTo: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired
};

export default WorkflowHOC(Photo);

const styles = StyleSheet.create({
  view: {
    backgroundColor: BRAND_COLOR
  },
  camera: {
    flex: 1,
    backgroundColor: BG_COLOR
  }
});
