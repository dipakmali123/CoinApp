import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import ChartBlock from '../../component/chart';
import styles from './Styles';

const DetailScreen = ({route, navigation}) => {
  const postData = route?.params?.post;
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Coin Details</Text>
      <ChartBlock />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Coin Set ({postData?.id})</Text>
        <View style={styles.post}>
          <Text>{postData?.body}</Text>
        </View>
        <React.Fragment>
          <Text style={styles.commentHeader}>Comments</Text>
          <View style={styles.post}>
            <Text>{postData?.name}</Text>
          </View>
        </React.Fragment>
        {postData.isSelected && (
          <Pressable style={styles.button}>
            <Text style={styles.text}>Added to Wallet</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
