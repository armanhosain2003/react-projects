import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BookList from "./bookListComponents/BookList";
import { ThemeContext } from "./contexts";

function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "dark h-full w-full" : ""}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <BookList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
