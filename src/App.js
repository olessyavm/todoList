import './App.css';
import { ToDoList } from './ToDoList';
import image from './todo1.jpg';
import image2 from './todo2.jpg';


function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} alt='todo1.jpg' width='300px' />
      </div>
      <div className="container">
        <h1>To Do List</h1>
      </div>
      <div className="container">
        <ToDoList />
      </div>
      <div className="container">
      <img src={image2} alt='todo2.jpg' width='300px' />
      </div>
    </div>
  );
}

export default App;
