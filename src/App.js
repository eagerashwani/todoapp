import Form from './components/Form'
import './App.css';
import AllTask from './components/AllTask';
import { useState } from 'react';

function App() { 
  const [tasks, setTasks] = useState([]);
  function addTask(task){
    setTasks(prev => {
      return [...prev, {task: task, done : false}];
    })
  }
  return (
   <main>
    <Form onAdd={addTask} />
    <AllTask />
   </main>
  );
}

export default App;
