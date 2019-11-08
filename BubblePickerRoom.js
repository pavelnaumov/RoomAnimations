import React, {Component} from 'react';
import {
  Text,
  View,
  Alert,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BubblePicker} from 'react-native-bubble-picker';
import Wall from './Wall';
import Box2D from 'box2dweb';

const b2World = Box2D.Dynamics.b2World;
const b2Vec2 = Box2D.Common.Math.b2Vec2;
const window = Dimensions.get('window');
const ratio = window.width / window.height;
const step = 0.00005;
const radius = 0.15;
const someInitialPosition = [0.5, 1.5];
let world;

const {width, height} = Dimensions.get('window');

class BubblePickerRoom extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    isSelected: false,
    visible: false,
  };

  componentWillMount() {
    this.start();
  }

  start() {
    world = new b2World(new b2Vec2(0.0, -2000000.0), true);
    // vertical walls
    new Wall(new b2Vec2(0, 0), new b2Vec2(0, 2.0), world);
    new Wall(new b2Vec2(0.5, 0), new b2Vec2(0.5, 2.0), world);

    // horizontal walls
    new Wall(new b2Vec2(0, 0.03), new b2Vec2(1, 0.03), world);
    new Wall(new b2Vec2(0, 0.5 / ratio), new b2Vec2(1, 0.5 / ratio), world);
  }

  onBubblePress = e => {
    const {isSelected, id} = e;
    this.setState({isSelected});
  };

  render() {
    const PickerProps = Platform.select({
      android: {
        radius: 5,
        fontSize: 10,
      },
      ios: {
        radius: 50,
        fontSize: 16,
      },
    });
    const items = [
      {
        name: 'Option 1',
        color: '#FF9933',
        textColor: '#ffffff',
        isSelected: this.state.isSelected,
      },
      {
        name: 'Option 2',
        color: '#66FF66',
        textColor: '#ffffff',
        isSelected: this.state.isSelected,
      },
      {
        name: 'Option 3',
        color: '#50BFE6',
        textColor: '#ffffff',
        isSelected: this.state.isSelected,
      },
    ].map((item, index) => ({
      text: item.name,
      color: item.color,
      textColor: item.textColor,
      isSelected: item.isSelected,
      id: index.toString(),
    }));

    const bubbles = (
      <BubblePicker
        {...PickerProps}
        items={items}
        onPress={this.onBubblePress}
        style={{height, width}}
      />
    );

    return (
      <View style={styles.rootView}>
        {this.state.visible && bubbles}
        <TouchableOpacity
          onPress={() => this.setState({visible: !this.state.visible})}
          style={styles.buttonStyle}>
          <Text>Press Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('World')}
          style={styles.secondButtonStyle}>
          <Text>Volleyball</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  rootView: {
    height,
    width,
  },
  buttonStyle: {
    position: 'absolute',
    top: 500,
    bottom: 0,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    height: 60,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  secondButtonStyle: {
    position: 'absolute',
    top: 600,
    bottom: 0,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    height: 60,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
};

export default BubblePickerRoom;
