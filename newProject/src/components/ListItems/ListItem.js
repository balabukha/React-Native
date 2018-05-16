import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = props => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10
  }
});

export default ListItem;
