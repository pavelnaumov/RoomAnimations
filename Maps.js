/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

export default class Maps extends Component {
  state = {
    map: new Map()
      .set(5, true)
      .set(1, true)
      .set(29, true)
      .set(21, true)
      .set(22, true)
      .set(23, true)
      .set(24, true)
      .set(25, true)
      .set(26, true)
      .set(27, true)
      .set(28, true)
      .set(29, true),
    elementToRemove: null,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  componentDidMount() {
    console.log(this.state.map);
  }

  removeElement = id => {
    id
      ? this.setState({
          map: [this.state.map.delete(id), new Map(this.state.map)].pop(),
        })
      : null;
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={{borderColor: 'black', width: 150, height: 50, borderWidth: 1}}
          onChangeText={text =>
            this.setState({elementToRemove: parseInt(text, 10)})
          }
          keyboardType="numeric"
        />
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 190,
            height: 30,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 10,
            backgroundColor: 'light-grey',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() =>
            this.removeElement(parseInt(this.state.elementToRemove, 10))
          }>
          <Text> Remove element </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
