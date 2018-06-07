import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItems/ListItem';
import InputList from './src/components/InputList/InputList';

export default class App extends React.Component {
  state = { places: [] };

  handleAddData = data =>
    this.setState(prevState => {
      return { places: prevState.places.concat(data) }; // создается новый массив, старый + новое значение
    });

  render() {
    const places = this.state.places.map((place, i) => {
      return <ListItem key={i} placeName={place} />;
    });
    return (
      <View style={styles.container}>
        <InputList handleAddData={data => this.handleAddData(data)} />
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
