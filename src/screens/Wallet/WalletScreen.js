import React, {useContext} from 'react';
import {View, FlatList, Text} from 'react-native';
import Context from '../../context/Context';
import styles from './Styles';

const WalletScreen = ({navigation}) => {
  const context = useContext(Context);
  const {tasks, deleteTask} = context;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items</Text>
      {tasks.length > 0 && (
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
      )}
      {tasks.length === 0 && (
        <>
          <View style={styles.noDataClass}>
            <Text style={styles.noDataText}>No Items Available</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default WalletScreen;
