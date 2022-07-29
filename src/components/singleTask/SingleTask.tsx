import React, { useState } from 'react'
import { Task } from '../model'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './singleTask.css'
import TaskList from '../taskList/TaskList';

interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask = ({task, tasks, setTasks}: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.todo);

    const handleDone = (id: number)=>{
        setTasks(tasks.map(task=>task.id === id ? {...task,isDone: !task.isDone} : task));
    };

    const handleDelete = (id:number)=>{
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleEdit = (e:React.FormEvent, id:number)=>{
        e.preventDefault();
        setTasks(
            tasks.map(task => (task.id === id ? {...task,todo:editTask}:task ))
        );
        setEdit(false);
    };
    
  return (
    <form className='tasks_single' onSubmit={(e)=>handleEdit(e,task.id)}>
        {
            edit ? (
                <input className='tasks_single--text' value={editTask} onChange={(e)=>setEditTask(e.target.value)}/>
            ) : (
                task.isDone ? (
                    <s className="tasks_single--text">{task.todo}</s>
                ) : (
                    <span className="tasks_single--text">{task.todo}</span>
                )
            )            
        }
        <div>
            <span className="icon" onClick={()=>{
                if(!edit && !task.isDone){
                    setEdit(!edit);
                }
            }}>
                <AiFillEdit/>
            </span>
            <span className="icon" onClick={()=>handleDelete(task.id)}>
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={()=>handleDone(task.id)}>
                <MdDone/>    
            </span> 
        </div>
    </form >
  )
}

export default SingleTask