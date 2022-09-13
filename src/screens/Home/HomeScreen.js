/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Pressable} from 'react-native';
import useCoins from '../../querry/coinDataQuery';
import Context from '../../context/Context';
import styles from './Styles';

const HomeScreen = ({navigation}) => {
  const {data, isLoading, isSuccess} = useCoins();
  const context = useContext(Context);
  const {tasks, deleteTask, addNewTask} = context;
  let coinData = data;
  const checkDataSelected = () => {
    if (tasks.length > 0 && data.length > 0) {
      data.forEach(element => {
        element.isSelected = false;
      });
      data.forEach(element => {
        tasks.forEach(val => {
          if (val.id === element.id) {
            element.isSelected = true;
          }
        });
      });
    }
    coinData = data;
  };

  const onSelectAddRemove = (flag, values) => {
    if (flag) {
      addNewTask(values);
      data.map(val => {
        if (val.id === values.id) {
          val.isSelected = true;
        }
      });
      coinData = tasks;
    } else {
      deleteTask(values.id);
      data.map(val => {
        if (val.id === values.id) {
          val.isSelected = false;
        }
      });
      coinData = tasks;
    }
  };

  useEffect(checkDataSelected, [tasks]);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Welcome to Torum (CoinApp)</Text>
      {isLoading && (
        <React.Fragment>
          <Text style={styles.loading}>Loading...</Text>
        </React.Fragment>
      )}

      {isSuccess && (
        <React.Fragment>
          <Text style={styles.header}>All coins</Text>
          <FlatList
            data={coinData}
            style={styles.wrapper}
            keyExtractor={item => `${item?.id}`}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.push('Details', {post: item})}
                style={styles.post}>
                <View style={styles.item}>
                  <Text style={styles.postTitle}>Coin Set - {index + 1}</Text>
                  <Text style={styles.postTitle}>{item.name}</Text>
                </View>
                <View style={styles.item}>
                  <Pressable
                    style={styles.button}
                    onPress={() =>
                      item.isSelected
                        ? onSelectAddRemove(false, item)
                        : onSelectAddRemove(true, item)
                    }>
                    <Text style={styles.text}>
                      {item.isSelected ? 'Remove from Wallet' : 'Add to Wallet'}
                    </Text>
                  </Pressable>
                </View>
              </TouchableOpacity>
            )}
          />
        </React.Fragment>
      )}
    </View>
  );
};

export default HomeScreen;
