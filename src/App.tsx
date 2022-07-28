import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/inutField/InputField';
import { Task } from './components/model';
import TaskList from './components/taskList/TaskList';

const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, {id: Date.now(),todo: task, isDone: false}]);
      setTask("");
    }
  };

  console.log(tasks);
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}
 
export default App;
