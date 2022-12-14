import {StyleSheet} from 'react-native';

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
  noDataClass: {
    alignSelf: 'center',
    padding: 8,
    fontSize: 15,
  },
  noDataText: {
    alignSelf: 'center',
    padding: 8,
    fontSize: 15,
    color: '#a42138',
  },
});

export default styles;
