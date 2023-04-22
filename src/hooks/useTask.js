import {useState} from 'react';

const useTask = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [task, setTask] = useState('');
  //Guardar tasks
  const [tasks, setTasks] = useState(['Tareas pendientes']);

  const [canUpdate, setCanUpdate] = useState(false);

  const addTask = () => {
    //agregar el task al arreglo
    setTasks(currentTasks => [...currentTasks, task]);
    //limpiar el task
    setTask('');
    //quitar input
    setShowAdd(false);
  };

  const deleteTask = index => {
    const temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };

  const editPastTask = (iteam) => {
    setShowAdd(true);
    setTask(iteam);
  };

  const updateTask = index => {
    const updateTask = task
    const temp = tasks.map((value, i) => {
      if(i === index) {
        value = updateTask;
        return value;
      } else {
        return value;
      }
    });
    setTasks(temp);
    setCanUpdate(false);
    setShowAdd(false);
    setTask('');
  };

  const updateAdd = state => {
    setShowAdd(state);
    setTask('')
  };

  const editTask = text => {
    setTask(text);
  };

  return {
    addTask,
    deleteTask,
    updateTask,
    editPastTask,
    task,
    tasks,
    showAdd,
    updateAdd,
    editTask,
  };
};

export default useTask;
