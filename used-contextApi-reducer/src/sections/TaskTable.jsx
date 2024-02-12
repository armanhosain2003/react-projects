import { useContext, useState } from "react";
import AddTaskModal from "../components/AddTaskModal.jsx";
import DeleteTaskModal from "../components/DeleteTaskModal.jsx";
import SearchTask from "../components/SearchTask.jsx";
import TaskActions from "../components/TaskActions.jsx";
import TaskList from "../components/TaskList.jsx";
import {
  AddModalContext,
  AlertModalContext,
  TaskContext,
} from "../context/index.js";
import { filterTasks } from "../utils/utility.js";

function TaskTable() {
  // State Hooks
  const { state } = useContext(TaskContext);
  const { isShowModal } = useContext(AddModalContext);
  const { isShowAlert } = useContext(AlertModalContext);
  const [query, setQuery] = useState("");

  const results = filterTasks(state.taskData, query);

  // Handle the search input change
  function handleSearchTask(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions>
              <SearchTask query={query} onSearchInput={handleSearchTask} />
            </TaskActions>
            <TaskList tasks={results} />
          </div>
        </div>
        {isShowModal && <AddTaskModal />}

        {isShowAlert && <DeleteTaskModal />}
      </section>
    </>
  );
}

export default TaskTable;
