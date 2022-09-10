import {useQuery} from 'react-query';
import axios from 'axios';

const fetchCoins = async () => {
  const {data} = await axios.get(
    'https://jsonplaceholder.typicode.com/comments',
  );

  const modifiedData = data.map(element => ({isSelected: false, ...element}));

  return modifiedData;
};

const useCoins = () => useQuery('posts', fetchCoins);
export default useCoins;
