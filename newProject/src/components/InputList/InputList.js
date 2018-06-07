import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

class InputList extends Component {
  state = { placeName: '' };

  placeNamehandleChange = val => {
    this.setState({ placeName: val });
  };

  placeChangeHandler = val => {
    if (this.state.placeName.trim() === '') return;

    this.props.handleAddData(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={{ width: 300 }}
          value={this.state.placeName}
          onChangeText={this.placeNamehandleChange}
          placeholder="some place"
          style={styles.spaceInput}
        />
        <Button
          title="Add"
          style={styles.spaceButton}
          onPress={() => this.placeChangeHandler(this.state.placeName)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // занимает всю поверхность как по высоте, так и по ширине
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default InputList;
