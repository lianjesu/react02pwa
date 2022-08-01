import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/inutField/InputField';
import { Task } from './components/model';
import TaskList from './components/taskList/TaskList';
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, {id: Date.now(),todo: task, isDone: false}]);
      setTask("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
        <TaskList 
          tasks={tasks} 
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
}
 
export default App;
