/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import useCoins from '../querry/coinDataQuery';
import Context from '../context/Context';

const HomeScreen = ({navigation}) => {
  const {data, isLoading, isSuccess} = useCoins();
  const context = useContext(Context);
  const {tasks, deleteTask, addNewTask} = context;
  let coinData = data;
  console.log(tasks, 'TASKS');
  const checkDataSelected = () => {
    if (tasks.length > 0 && data.length > 0) {
      data.forEach(element => {
        element.isSelected = false;
      });
      data.forEach(element => {
        tasks.forEach(val => {
          console.log(element.id, val.id);
          if (val.id === element.id) {
            element.isSelected = true;
          }
        });
      });
    }
    coinData = data;
    console.log(coinData, 'DATA');
    console.log(tasks, 'TASKS');
  };

  const onSelectAddRemove = (flag, values) => {
    if (flag) {
      addNewTask(values);
      data.map(val => {
        if (val.id === values.id) {
          val.isSelected = true;
          console.log(val, 'ADT');
        }
      });
      coinData = tasks;
    } else {
      deleteTask(values.id);
      data.map(val => {
        if (val.id === values.id) {
          val.isSelected = false;
          console.log(val, 'RDT');
        }
      });
      coinData = tasks;
    }
  };

  useEffect(checkDataSelected, []);

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

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
    textAlign: 'center',
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: '#fdfdfd',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#202c41',
    paddingVertical: 10,
  },
  post: {
    backgroundColor: '#202c41',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  postTitle: {color: '#fff', textTransform: 'capitalize'},
  loading: {
    color: '#a42138',
    justifyContent: 'center',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 250,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
