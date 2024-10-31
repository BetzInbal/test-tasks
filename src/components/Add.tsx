import React from 'react'
import Task from '../types/task'

interface Props{
    setNewTask:(newTask:Task)=>void
}

export default function Add({setNewTask}:Props) {
  return (
    <div>Add</div>
  )
}
