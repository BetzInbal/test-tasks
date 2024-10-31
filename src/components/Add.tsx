import React, { useState } from 'react'
import Task from '../types/task'

interface Props{
  setRefresh:(ref:boolean)=>void

}

export default function Add({setRefresh}:Props) {

const [name, setName] = useState('')
const [status, setStatus] = useState('Pending')
const [priority, setPriority] = useState('Low')
const [description, setDescription] = useState('')

const addTask = async(task:Task) => {  

  const res = await fetch("https://reactexambackend.onrender.com/missions/apikey=8434336",
    {
        method:"POST",
        body: JSON.stringify(task),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    console.log(res.status);
    setRefresh(true)
    setName('')
    setDescription('')
  }
  return (
    <div>
      <input 
        type='text' 
        placeholder='enter name'
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <select name="status" id=""
             onChange={e => setStatus(e.target.value)}
             value={status}
             >
        <option value="Pending" selected={true}>Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" id="" 
       onChange={e => setDescription(e.target.value)}
       value={description}
       >
        <option value="Low" selected={true}>Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input 
        type='text' 
        placeholder='enter description'
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <button onClick={e =>addTask({name,status,priority,description})}>Add task</button>
    </div>
  )
}


