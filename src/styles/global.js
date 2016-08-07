import {StyleSheet, Platform, Dimensions} from 'react-native';
export const BG_COLOR = '#e4e8e9';
export const BRAND_COLOR = '#77a276';
export const TEXT_COLOR = '#e5dbda';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const COMMON_STYLES = StyleSheet.create({
  pageContainer: {
    backgroundColor: BG_COLOR,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    paddingBottom: Platform.OS === 'ios' ? 40 : 0,
    marginHorizontal: Platform.OS === 'ios' ? 0 : 10,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0
  },
  padTop: {
    paddingTop: (DEVICE_HEIGHT / 2) - 40
  },
  h1: {
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-CondensedBold' : 'sans-serif-condensed',
    fontSize: 18
  },
  text: {
    color: TEXT_COLOR,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif'
  },
  buttonBar: {
    backgroundColor: BRAND_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20
  }
});
