import { useContext} from "react";
import { TaskContext } from '../context/TaskContext';
const TaskCard = ({ task }) => {

     const {deleteTask} = useContext(TaskContext);
     const handleDelete = (e)=> {
          deleteTask(task.id)
     }

     return (
          <div className="bg-slate-900 mx-2 rounded-md p-4 my-2 ">
               <h1 className="text-white text-xl font-bold capitalize">{task.title}</h1>
               <p className="text-white text-sm">{task.description}</p>
               <button className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-md mt-4 " onClick={handleDelete}>Quitar Tarea</button>
          </div>
     );
};

export default TaskCard;
