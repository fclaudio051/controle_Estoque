import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const AddItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = () => {
    if (itemName && itemQuantity) {
      const newItem = {
        id: Date.now(), // ou outra lógica para gerar um ID único
        name: itemName,
        quantity: parseInt(itemQuantity),
      };
      onAddItem(newItem);
      setItemName('');
      setItemQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={itemQuantity}
        onChangeText={setItemQuantity}
        keyboardType="numeric"
      />
      <Button title="Adicionar Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AddItem;
