import { useState } from "react";
import { BooksData } from "../data/BooksData";
import { filterTasks } from "../utils/utility";
import BookItem from "./BookItem";
import SearchBox from "./SearchBox";
import Sort from "./Sort";

function MainBody() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState(BooksData);
  let results = filterTasks(books, query);

  // let to search the books

  function handleSearch(query) {
    setQuery(query);
  }

  // let to do favourite/unfavourite books
  function handleFavourite(bookId) {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    const newBooks = [...books];
    newBooks[bookIndex].isFavourite = !newBooks[bookIndex].isFavourite;
    setBooks(newBooks);
  }

  // handling to sort
  function handleSort(val) {
    const updateBooks = [...books].sort((a, b) => {
      if (val === "name_asc") {
        return a.name.localeCompare(b.name);
      }
      if (val === "name_desc") {
        return b.name.localeCompare(a.name);
      }
      if (val === "year_asc") {
        return a.publish_year - b.publish_year;
      }
      if (val === "year_desc") {
        return b.publish_year - a.publish_year;
      }
      return 0;
    });
    setBooks(updateBooks);
  }

  return (
    <div>
      <main className="my-10 lg:my-14">
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2024</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>
              <SearchBox onSearchHandle={handleSearch} />
            </div>
            <Sort onSort={handleSort} />
          </div>
        </header>
        <BookItem booksData={results} onFavourite={handleFavourite} />
      </main>
    </div>
  );
}

export default MainBody;
