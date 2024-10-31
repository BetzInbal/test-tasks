import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Grid from './components/Grid'
import Task from './types/task'

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<Task>()

  return (
    <>
    <Add setNewTask={setNewTask}/>
    <Grid tasks={tasks}/>
    </>
  )
}

export default App
