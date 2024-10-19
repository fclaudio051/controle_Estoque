import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ItemList = ({ items, onSelectItem }) => {
  return (
    <View>
      {items.map((item) => {
        const isLowStock = item.maxQuantity && (item.quantity <= item.maxQuantity * 0.3); // Verifica se a quantidade está abaixo de 30%

        return (
          <TouchableOpacity key={item.id} onPress={() => onSelectItem(item.id)}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={[styles.quantityText, isLowStock && { color: 'red' }]}>
                Quantidade: {item.quantity} / Máximo: {item.maxQuantity}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
  },
});

export default ItemList;
