import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import Context from '../context/Context';
import ChartBlock from '../component/chart';

const DetailScreen = ({route, navigation}) => {
  const postData = route?.params?.post;
  const context = useContext(Context);
  const {tasks} = context;
  console.log(tasks, 'TASKS');
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
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
    padding: 30,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 28,
    color: 'blue',
    paddingVertical: 10,
  },
  commentHeader: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ddd',
    paddingVertical: 30,
  },
  post: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: screenWidth * 0.75,
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

export default DetailScreen;
