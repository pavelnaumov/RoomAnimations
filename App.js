import React, {Component} from 'react';
import {View} from 'react-native';
import AppNavigator from './Navigator';
import {createAppContainer} from 'react-navigation';

export default class App extends Component {
  render() {
    const AppContainer = createAppContainer(AppNavigator);
    return (
      <View style={styles.rootStyle}>
        <AppContainer />
      </View>
    );
  }
}

const styles = {
  rootStyle: {
    flex: 1,
  },
};
