import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Context from '../context/Context';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const context = useContext(Context);
  const {tasks} = context;
  const navigation = useNavigation();

  return (
    <>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <Text>Cart ({tasks.length})</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartScreen;
