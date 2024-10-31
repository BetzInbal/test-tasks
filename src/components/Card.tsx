import React from 'react'
import Task from '../types/task'

interface Props{
  task:Task
  setRefresh:(ref:boolean)=>void

}

export default function Card({task, setRefresh}:Props) {
  return (
    <div>{JSON.stringify(task)}
    <button>delete</button>
    <button>progress</button>
    </div>
  )
}
