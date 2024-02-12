import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import { AddModalContext, AlertModalContext, TaskContext } from "./context";
import { initialState } from "./data/data";
import { TaskReducer } from "./reducers/TaskReducer";

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);

  return (
    <>
      <TaskContext.Provider value={{ state, dispatch }}>
        <AddModalContext.Provider value={{ isShowModal, setIsShowModal }}>
          <AlertModalContext.Provider value={{ isShowAlert, setIsShowAlert }}>
            <Page />
            <ToastContainer />
          </AlertModalContext.Provider>
        </AddModalContext.Provider>
      </TaskContext.Provider>
    </>
  );
}

export default App;
