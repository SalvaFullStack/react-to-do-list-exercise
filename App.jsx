import { useState } from "react";
let taskId = 0;

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>React to do list</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Añade tu tarea"
        ></input>
        <button
          onClick={() => {
            tasks.push({
              id: taskId++,
              name: task,
            });
            console.log(tasks);
          }}
        >
          Add
        </button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
