import React from 'react';
import './taskList.css';
import { Task } from '../model';
import SingleTask from '../singleTask/SingleTask';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    completedTasks: Task[];
    setCompletedTasks:React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({tasks, setTasks, completedTasks, setCompletedTasks}:Props) => {
  return (
    <div className="container">
      <Droppable droppableId='taskList'>
        {
          (provided)=>(
            <div 
              className="tasks"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="tasks_heading">
                Active Tasks
              </span>
              {
                tasks.map((task, index) => (
                  <SingleTask 
                    index={index}
                    task={task}
                    tasks={tasks}
                    key={task.id}
                    setTasks={setTasks}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )
        }
      </Droppable>

      <Droppable droppableId='taskRemove'>
        {
          (provided)=>(
            <div 
              className="tasks remove"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="tasks_heading">
                Completed Tasks
              </span>
              {
                completedTasks.map((task, index) => (
                  <SingleTask 
                    index={index}
                    task={task}
                    tasks={completedTasks}
                    key={task.id}
                    setTasks={setCompletedTasks}
                  />
                ))
              }
              {provided.placeholder}
            </div> 
          )
        }        
      </Droppable>
      
           
    </div>
  )
}

export default TaskList