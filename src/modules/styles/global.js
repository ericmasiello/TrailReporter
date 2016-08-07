import { StyleSheet, Platform } from 'react-native';
export const BG_COLOR = '#e4e8e9';
export const TEXT_COLOR = '#e5dbda';
export const HEADER_TEXT_COLOR = '#fff';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';

export const COMMON_STYLES = StyleSheet.create({
  pageContainer: {
    backgroundColor: BG_COLOR,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    marginBottom: Platform.OS === 'ios' ? 48 : 0,
    marginHorizontal: Platform.OS === 'ios' ? 0 : 10,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0
  },
  h1: {
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-CondensedBold' : 'sans-serif-condensed',
    fontSize: 18
  },
  text: {
    color: TEXT_COLOR,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif'
  },
});
