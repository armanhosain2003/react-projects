/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Task from "./Task";
import TaskHeader from "./TaskHeader.jsx";

function TaskList({ tasks }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <TaskHeader />
        <tbody>
          {tasks.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="bg-gray-800 py-4 text-3xl text-center text-emerald-200"
              >
                No Task Found 🥲
              </td>
            </tr>
          )}
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
