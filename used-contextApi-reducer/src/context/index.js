import { createContext } from "react";

const TaskContext = createContext();
const AddModalContext = createContext(false);
const AlertModalContext = createContext(false);

export { AddModalContext, AlertModalContext, TaskContext };
