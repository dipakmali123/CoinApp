import React, {useState} from 'react';
import Context from './Context';

const GlobalState = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = task => {
    const list = [...tasks, task];
    setTasks(list);
  };

  const deleteTask = taskId => {
    tasks.map((val, index) => {
      if (val.id === taskId) {
        setTasks(tasks.splice(index, 1));
      }
    });
  };

  return (
    <Context.Provider
      value={{
        tasks: tasks,
        addNewTask: addNewTask,
        deleteTask: deleteTask,
      }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalState;