import React,{useState} from 'react';
import './App.css';
import './style.css'

function App() {
  const [task,setTask] = useState("");
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

  const deleteItem = (id) => {
    
  }
  return (
    <div className="App">
     <h1>To Do List Application</h1>
     <input type="text" className='input' placeholder='Enter Task name' value={task} onChange = {e => setTask(e.target.value)} />
     <button className='add_btn' onClick={() => addItem()}>Add Task</button>

     <ul>
      {items.map(item => {
        return (
          <li className='list_of_tasks' key={item.id}>{item.value}<button className='delete_btn' onClick={() => deleteItem(item.id)}>Delete</button></li>
        )
      })}
     </ul>
    </div>
  );
}

export default App;
