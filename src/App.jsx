import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import { BookContext, ThemeContext } from "./contexts";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BookContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </BookContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
