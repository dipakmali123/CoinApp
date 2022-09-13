import React, {useState} from 'react';
import Context from './Context';

const GlobalState = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = task => {
    const list = [...tasks, task];
    setTasks(list);
  };

  const deleteTask = taskId => {
    const index = tasks.findIndex(s => s.id === taskId);
    tasks.splice(index, 1);
    setTasks([...tasks]);
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
