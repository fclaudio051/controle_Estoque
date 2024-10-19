import React, { useState } from 'react';
import { View, StyleSheet, Alert, Modal, TextInput, Button as RNButton, Text, ScrollView } from 'react-native';
import AddItem from './src/components/AddItem';
import ItemList from './src/components/ItemList';
import StockSummary from './src/components/StockSummary';
import Header from './src/components/Header';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newMaxQuantity, setNewMaxQuantity] = useState('');

  // Função para ordenar os itens por ordem alfabética
  const sortItemsAlphabetically = (items) => {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  };

  // Função para adicionar ou somar quantidade de um item já existente
  const addItem = (item) => {
    const trimmedName = item.name.trim(); // Remove espaços em branco

    if (trimmedName === '') {
      Alert.alert('Nome inválido!'); // Garantindo que o nome não seja vazio
      return;
    }

    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.name.toLowerCase() === trimmedName.toLowerCase());

      let updatedItems;
      if (existingItemIndex !== -1) {
        // Item já existe, somar quantidades (aceita valores negativos)
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += parseInt(item.quantity);
      } else {
        // Adicionar novo item
        updatedItems = [...prevItems, { ...item, name: trimmedName }];
      }

      // Ordenar a lista de itens alfabeticamente
      return sortItemsAlphabetically(updatedItems);
    });
  };

  // Seleciona o item e prepara o modal de edição com os dados do item
  const handleSelectItem = (itemId) => {
    const item = items.find((i) => i.id === itemId);
    setSelectedItem(item);

    Alert.alert(
      'Ações do Item',
      `O que você quer fazer com o item "${item.name}"?`,
      [
        {
          text: 'Editar',
          onPress: () => {
            setNewName(item.name); // Preenche o campo com o nome atual do item
            setNewQuantity(item.quantity.toString()); // Preenche o campo com a quantidade atual
            setNewMaxQuantity(item.maxQuantity?.toString() || ''); // Preenche o campo com a quantidade máxima atual, se houver
            setEditModalVisible(true); // Abre o modal de edição
          }
        },
        { text: 'Excluir', onPress: () => handleDeleteItem(item.id) },
        { text: 'Cancelar', style: 'cancel' }
      ]
    );
  };

  // Edita o item selecionado, somando quantidade se necessário
  const handleEditItem = () => {
    const trimmedName = newName.trim(); // Remove espaços em branco

    if (trimmedName === '' || isNaN(newQuantity) || isNaN(newMaxQuantity) || newMaxQuantity <= 0) {
      Alert.alert('Preencha todos os campos corretamente!');
      return;
    }

    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.name.toLowerCase() === trimmedName.toLowerCase() && i.id !== selectedItem.id
      );

      let updatedItems;
      if (existingItemIndex !== -1) {
        // Se o nome já existe em outro item, somar as quantidades e remover o item duplicado
        updatedItems = prevItems.filter((item) => item.id !== selectedItem.id);
        updatedItems[existingItemIndex].quantity += parseInt(newQuantity); // Soma também valores negativos
      } else {
        // Se não existe, apenas edita o item selecionado
        updatedItems = prevItems.map((item) =>
          item.id === selectedItem.id
            ? { ...item, name: trimmedName, quantity: parseInt(newQuantity), maxQuantity: parseInt(newMaxQuantity) }
            : item
        );
      }

      // Ordenar a lista de itens alfabeticamente
      return sortItemsAlphabetically(updatedItems);
    });

    setEditModalVisible(false);
    setSelectedItem(null);
  };

  // Exclui item
  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => sortItemsAlphabetically(prevItems.filter((item) => item.id !== itemId)));
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem onAddItem={addItem} />
      {/* ScrollView para permitir rolagem quando houver muitos itens */}
      <ScrollView>
        <ItemList items={items} onSelectItem={handleSelectItem} />
      </ScrollView>
      <StockSummary items={items} />

      {/* Modal de edição */}
      <Modal visible={isEditModalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Editar Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Novo Nome"
            value={newName}
            onChangeText={setNewName}
          />
          <TextInput
            style={styles.input}
            placeholder="Nova Quantidade"
            keyboardType="numeric"
            value={newQuantity}
            onChangeText={setNewQuantity}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantidade Máxima Desejada"
            keyboardType="numeric"
            value={newMaxQuantity}
            onChangeText={setNewMaxQuantity}
          />
          <RNButton title="Salvar Alterações" onPress={handleEditItem} />
          <RNButton title="Cancelar" onPress={() => setEditModalVisible(false)} color="red" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default App;
