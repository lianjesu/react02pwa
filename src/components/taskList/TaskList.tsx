import React from 'react';
import './taskList.css';
import { Task } from '../model';
import SingleTask from '../singleTask/SingleTask';

interface Props{
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({tasks, setTasks}:Props) => {
  return (
    <div className="container">
      <div className="tasks">
        <span className="tasks_heading">
          Active Tasks
        </span>
        {
          tasks.map(task => (
            <SingleTask 
              task={task}
              tasks={tasks}
              key={task.id}
              setTasks={setTasks}
            />
          ))
        }
      </div>
      <div className="tasks remove">
      <span className="tasks_heading">
          Completed Tasks
        </span>
        {
          tasks.map(task => (
            <SingleTask 
              task={task}
              tasks={tasks}
              key={task.id}
              setTasks={setTasks}
            />
          ))
        }
      </div>      
    </div>
  )
}

export default TaskList