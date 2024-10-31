import React from 'react'
import Task from '../types/task'

interface Props{
  task:Task
  setRefresh:(ref:boolean)=>void

}

export default function Card({task, setRefresh}:Props) {
  return (
    <div>{JSON.stringify(task)}
    <button onClick={ async e => {
      const res = await fetch(`https://reactexambackend.onrender.com/missions/apikey=8434336/${task._id}`,
        {
            method:"DELETE"
        })
        console.log(res.status);
        setRefresh(true)
    }}
    >delete</button>
    <button onClick={ async e => {
      const res = await fetch(`https://reactexambackend.onrender.com/missions/apikey=8434336/progress/${task._id}`,
        {
            method:"POST"
        })
        console.log(res.status);
        setRefresh(true)
    }}
    >progress</button>
    </div>
  )
}
