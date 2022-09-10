import React from 'react';

export default React.createContext({
  tasks: [],
  addNewTask: post => {},
  deleteTask: postId => {},
});
