import React, {Component} from 'react';
import {Text, View, Button, FlatList, StyleSheet} from 'react-native';

export class App extends Component {
  render() {
    return (
      <View style={styles.div}>
        <View>
          <Text style={styles.textBold}>Saldo R$ 2.102,45</Text>
          <Button title="Adicionar" />
        </View>
        <View>
          <Text style={styles.textBold}>Categorias:</Text>
        </View>
        <FlatList
          data={[
            {key: 'Alimentação: $200'},
            {key: 'Combustível: $12'},
            {key: 'Aluguel: $120'},
            {key: 'Lazer: $250'},
            {key: 'Outros: $1200'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
        <Text style={styles.textBold}>Últimos Lançamentos</Text>
        <FlatList
          data={[
            {key: 'Padaria Asa Branca: $10'},
            {key: 'Supermercado Isadora: $190'},
            {key: 'Posto Ipiranga: $190'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  div: {
    padding: 10,
  },
  textBold: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
