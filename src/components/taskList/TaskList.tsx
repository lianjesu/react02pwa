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
    <div className='tasks'>
        {tasks.map( task => (
            <SingleTask 
                task={task} 
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
            />
        ) )}
    </div>
  )
}

export default TaskList