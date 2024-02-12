import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddModalContext, TaskContext } from "../context";
import { getNextId } from "../utils/utility";

/* eslint-disable react/prop-types */
function AddTaskModal() {
  const { state, dispatch } = useContext(TaskContext);
  const { setIsShowModal } = useContext(AddModalContext);

  const [task, setTask] = useState(
    state.editTask || {
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavourite: false,
    }
  );

  // Handle the task
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      tags: e.target.name === "tags" ? e.target.value.split(",") : task.tags,
      id: task.id || getNextId(state.taskData),
    });
  };

  // Handle form validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      task.title.trim() === "" ||
      task.description.trim() === "" ||
      task.tags.length === 0 ||
      task.priority.trim() === ""
    ) {
      console.error("Fill the all fields");
    } else if (state.editTask && task.id === state.editTask.id) {
      dispatch({
        type: "EditTask",
        payload: task,
      });
      setIsShowModal(false);
      toast.success("The task updated successfully", {
        autoClose: 3000,
      });
    } else {
      dispatch({
        type: "AddTask",
        payload: task,
      });
      setIsShowModal(false);
      toast.success("The task added successfully", {
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-[99] backdrop-blur-md w-full h-full"></div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 absolute z-[999] top-1/4 left-1/3 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {state.editTask ? "Edit The Task" : "Add New Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                placeholder="Use comma for multiple tags"
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option disabled>Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            onClick={() => {
              dispatch({
                type: "OnEditTask",
                payload: null,
              });
              setIsShowModal(false);
            }}
            type="button" // Change the type to button
            className="rounded mr-3 bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>
          <button
            type="submit" // Keep the type as submit
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {state.editTask ? "Update" : "Create new Task"}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTaskModal;
