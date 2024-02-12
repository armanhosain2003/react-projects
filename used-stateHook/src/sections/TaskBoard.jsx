import { useState } from "react";
import AddTaskModal from "../components/AddTaskModal.jsx";
import DeleteTaskModal from "../components/DeleteTaskModal.jsx";
import SearchTask from "../components/SearchTask";
import TaskActions from "../components/TaskActions.jsx";
import TaskList from "../components/TaskList.jsx";
import { initialData } from "../data/data.js";
import { filterTasks, getNextId } from "../utils/utility.js";

function TaskBoard() {
  // State Hooks
  const [tasks, setTasks] = useState(initialData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [deleteTaskModal, setDeleteTaskModal] = useState(false);
  const [deleteTask, setDeleteTask] = useState(null);
  const [deleteAllTasks, setDeleteAllTasks] = useState(false);
  const [query, setQuery] = useState("");
  const results = filterTasks(tasks, query);

  // Event Handlers
  // Handle adding or updating a task
  function handleAddTask(newTask) {
    setShowAddModal(false);
    setEditTask(null);

    const updatedTask = tasks.some((task) => task.id === newTask.id);
    if (updatedTask) {
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
    } else {
      setTasks([...tasks, newTask]);
    }
  }

  // Provide the data of the task to be edited to the task modal
  function handleEditTask(task) {
    setShowAddModal(true);
    setEditTask(task);
  }

  // Toggle the favourite status of a task
  function handleFavourite(taskId) {
    setTasks(
      tasks.map((t) => {
        if (t.id === taskId) {
          return {
            ...t,
            isFavourite: !t.isFavourite,
          };
        }
        return t;
      })
    );
  }

  // Request permission to delete a task
  function handleDeleteTask(taskId) {
    setDeleteTaskModal(true);
    setDeleteTask(taskId);
  }

  // Delete the specific task
  function handleConfirmDelete() {
    if (deleteAllTasks) {
      setTasks([]);
      setDeleteTaskModal(false);
      setDeleteAllTasks(false);
    } else {
      const filteredTasks = tasks.filter((task) => task.id !== deleteTask);
      setTasks(filteredTasks);
      setDeleteTask(null);
      setDeleteTaskModal(false);
    }
  }

  // Delete all tasks
  function handleDeleteAllTasks() {
    setDeleteTaskModal(true);
    setDeleteAllTasks(true);
  }

  // Handle the search input change
  function handleSearchTask(e) {
    setQuery(e.target.value);
  }

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            tasks={tasks}
            onAddTask={() => setShowAddModal(true)}
            onDeleteAllTasks={handleDeleteAllTasks}
          >
            <SearchTask query={query} onSearchInput={handleSearchTask} />
          </TaskActions>
          <TaskList
            tasks={results}
            onFavourtite={handleFavourite}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
          />
        </div>
      </div>
      {showAddModal && (
        <AddTaskModal
          id={getNextId(results)}
          editTask={editTask}
          onSave={handleAddTask}
          onClose={() => {
            setShowAddModal(false);
            setEditTask(null);
          }}
        />
      )}

      {deleteTaskModal && (
        <DeleteTaskModal
          task={deleteAllTasks}
          onAgree={handleConfirmDelete}
          onDisagree={() => setDeleteTaskModal(false)}
        />
      )}
    </section>
  );
}

export default TaskBoard;
