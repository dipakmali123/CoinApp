import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Context from '../context/Context';

const WalletScreen = ({navigation}) => {
  const context = useContext(Context);
  const {tasks, deleteTask} = context;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.rowcontainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Text
                style={styles.delete}
                onPress={() => {
                  deleteTask(item.id);
                }}>
                Remove
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  rowcontainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 8,
    fontSize: 15,
  },
});

export default WalletScreen;
