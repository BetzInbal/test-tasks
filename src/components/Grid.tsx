import React from 'react'
import Task from '../types/task'
import Card from './Card'

interface Props{
    tasks:Task[]
}

export default function Grid({tasks}:Props) {
  return (
    <div>
        {tasks.map(t => <Card task={t} key={t.id}/>)}
        
    </div>
  )
}
