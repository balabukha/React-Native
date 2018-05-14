import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  };

  placeNamehandleChange = val => {
    this.setState({ placeName: val });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300 }}
          value={this.state.placeName}
          onChangeText={this.placeNamehandleChange}
          placeholder="some place"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
