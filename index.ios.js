import {Provider} from 'react-redux';
import store from './src/redux/store';
import Root from './src/modules/root/index';

import React from 'react';
import {AppRegistry} from 'react-native';

const TrailReporter = React.createClass({

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
});

AppRegistry.registerComponent('TrailReporter', () => TrailReporter);
