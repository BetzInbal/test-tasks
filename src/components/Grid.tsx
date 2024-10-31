import React from 'react'
import Task from '../types/task'
import Card from './Card'

interface Props{
    tasks:Task[]
    setRefresh:(ref:boolean)=>void
}

export default function Grid({tasks,setRefresh}:Props) {
  return (
    <div>
        {tasks.map(t => <Card task={t} setRefresh={setRefresh} key={t._id}/>)}
        
    </div>
  )
}
