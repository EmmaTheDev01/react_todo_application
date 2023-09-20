import React,{useState} from 'react';
import './App.css';

function App() {
  const [task,setTask] = useState([]);
  const [items,setItems] = useState([]);

  const addItem = () => {
    if(!task){
      alert("Please enter a task");
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: task 
    }; 
    setItems(oldList =>[...oldList,item]);
    setTask("");
    console.log(task);
    console.log(items); 
  }
  return (
    <div className="App">
     <h1>To Do List Application</h1>
     <input type="text" placeholder='Enter Task name' value={task} onChange = {e => setTask(e.target.value)} />
     <button onClick={() => addItem()}>Add Task</button>

     <ul>
      {items.map(item => {
        return (
          <li key={item.id}>{item.value}</li>
        )
      })}
     </ul>
    </div>
  );
}

export default App;
