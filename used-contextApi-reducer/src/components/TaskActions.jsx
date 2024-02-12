/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AddModalContext, AlertModalContext, TaskContext } from "../context";

function TaskActions({ children }) {
  const { state } = useContext(TaskContext);
  const { setIsShowAlert } = useContext(AlertModalContext);
  const { setIsShowModal } = useContext(AddModalContext);
  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          {children}
          <button
            onClick={() => setIsShowModal(true)}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>
          {state.taskData.length > 0 && (
            <button
              onClick={() => setIsShowAlert(true)}
              className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
            >
              Delete All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default TaskActions;
