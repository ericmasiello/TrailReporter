import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Camera from 'react-native-camera';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import WorkflowHOC from '../../components/WorkflowHOC';
import {COMMON_STYLES, BRAND_COLOR, BG_COLOR} from '../../styles/global';

export class Photo extends Component {
  constructor(props) {
    super(props);
    this.capturePhoto = this.capturePhoto.bind(this);
  }
  capturePhoto() {
    debugger;
    this.cam.capture({
      target: Camera.constants.CaptureTarget.disk
    }, (err, filePath) => {
      console.log('Got into capture', filePath);
      debugger;
      if(err) {
        return;
      }
      //this.props.savePhotoActionCreator(filePath);
    });
  }
  render() {
    debugger
    return(
      <View style={[COMMON_STYLES.pageContainer, styles.view]}>
        <Camera
          ref={(c) => this.cam = c}
          type='cameraType: Camera.constants.Type.back'
          style={styles.camera}
          aspect={Camera.constants.Aspect.Fill} />
        <View style={styles.buttonBar}>
          <LinkButton onPress={this.props.goBack}>Back</LinkButton>
          <Button onPress={this.capturePhoto}>Photo</Button>
          <LinkButton onPress={this.props.goTo('SELECT_ISSUE')}>Skip</LinkButton>
        </View>
      </View>
    );
  }
}

export default WorkflowHOC(Photo);

const styles = StyleSheet.create({
  view: {
    backgroundColor: BRAND_COLOR,
  },
  camera: {
    flex: 1,
    backgroundColor: BG_COLOR
  },
  buttonBar: {
    backgroundColor: BRAND_COLOR,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
