import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Surface} from 'gl-react-native';
import GL from 'gl-react';
import Triangle from './Triangle';

const {width, height} = Dimensions.get('window');

export default class TestTriangle extends Component {
  componentDidUpdate() {
    let now = Date.now();
    let lastRendered = now;
    let diff = now - lastRendered;
    let timeout = diff >= 16 ? 0 : 16 - diff;
    setTimeout(() => {
      this.forceUpdate();
    }, timeout);
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  render() {
    return (
      <View>
        <Surface width={width} height={height}>
          <GL.Node
            shader={{
              frag: Triangle,
            }}
          />
        </Surface>
      </View>
    );
  }
}
