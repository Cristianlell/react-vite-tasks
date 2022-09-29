import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {

  return (
    <div className="App bg-slate-800 h-screen">
      <div className="mx-auto" >
        <TaskForm />
        <TaskList />
      </div>

    </div>
  )
}

export default App
