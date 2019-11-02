import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import TestTriangle from './TestTriangle';
import World from './World';

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <TestTriangle /> */}
        <World />
      </View>
    );
  }
}
