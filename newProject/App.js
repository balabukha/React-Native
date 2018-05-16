import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItems/ListItem';

export default class App extends React.Component {
  state = { placeName: '', places: [] };

  placeNamehandleChange = val => {
    this.setState({ placeName: val });
  };

  placeChangeHandler = val => {
    if (this.state.placeName.trim() === '') return;

    this.setState(prevState => {
      return { places: prevState.places.concat(prevState.placeName) }; // создается новый массив, старый + новое значение
    });
  };

  render() {
    const places = this.state.places.map((place, i) => {
      return <ListItem key={i} placeName={place} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ width: 300 }}
            value={this.state.placeName}
            onChangeText={this.placeNamehandleChange}
            placeholder="some place"
            style={styles.spaceInput}
          />
          <Button title="Add" style={styles.spaceButton} onPress={this.placeChangeHandler} />
        </View>
        <View style={styles.listItems}>{places}</View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // занимает всю поверхность как по высоте, так и по ширине
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  spaceInput: {
    width: '70%'
  },
  spaceButton: {
    width: '30%'
  },
  listItems: {
    width: '100%'
  }
});
