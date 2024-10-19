import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name || 'Item sem nome'}</Text>
      <Text style={styles.quantity}>Quantidade: {item.quantity || 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
  },
});

export default Item;
