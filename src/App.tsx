import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/Add'
import Grid from './components/Grid'
import Task from './types/task'

function App() {

  const [tasks, setTasks] = useState<Task[]>([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const data = async () => {
      const res = await fetch(
        "https://reactexambackend.onrender.com/missions/apikey=8434336"
      );
      const resJson = await res.json();
      setTasks([...resJson]);
    };
    data()
    setRefresh(false)
  }, [refresh]);

  return (
    <>
    <Add setRefresh={setRefresh}/>
    <h1>Tasks</h1>
    <Grid tasks={tasks} setRefresh={setRefresh}/>
    </>
  )
}

export default App
