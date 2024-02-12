import { useContext } from "react";
import { AlertModalContext, TaskContext } from "../context";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
function DeleteTaskModal() {
  const { state, dispatch } = useContext(TaskContext);
  const { setIsShowAlert } = useContext(AlertModalContext);

  const handleDelete = () => {
    setIsShowAlert(false);
    if (state.deleteTaskId) {
      dispatch({
        type: "DeleteTask",
        payload: state.deleteTaskId,
      });
      toast.success("The task was deleted", {
        autoClose: 3000,
      });
    } else {
      dispatch({
        type: "DeleteAllTasks",
      });
      toast.success("The all tasks was deleted", {
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-[99] w-full h-screen backdrop-blur-md"></div>
      <div className="z-[999] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {state.deleteTaskId
            ? "Are you sure, you want to delete it?"
            : "Are you sure, you want to delete all tasks?"}
        </h2>
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            onClick={handleDelete}
            type="button"
            className="bg-blue-600 mr-1 border-transparent rounded-md py-2 px-5"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setIsShowAlert(false);
              dispatch({
                type: "OnDeleteTask",
                payload: null,
              });
            }}
            className="bg-orange-600 ml-1 border-transparent rounded-md py-2 px-5"
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteTaskModal;
