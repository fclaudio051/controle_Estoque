import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const StockSummary = ({ items }) => {
  // Verifica se o array está presente e válido
  if (!Array.isArray(items)) {
    return (
      <View style={styles.container}>
        <Text>Erro: Itens inválidos</Text>
      </View>
    );
  }

  // Calcula a quantidade total, lidando com valores de quantidade inválidos
  const totalQuantity = items.reduce((total, item) => {
    const itemQuantity = Number(item.quantity) || 0; // Garantindo que seja um número válido
    return total + itemQuantity;
  }, 0);

  return (
    <View style={styles.container}>
      <Text>Total de Itens: {items.length}</Text>
      <Text>Quantidade Total: {totalQuantity}</Text>
    </View>
  );
};

StockSummary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired, // Garantindo que quantity seja um número
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default StockSummary;
