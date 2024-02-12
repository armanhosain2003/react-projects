import { useState } from "react";
import BookItem from "./BookItem";
import SearchBox from "./SearchBox";
import Sort from "./Sort";
import { BooksData } from "./booksData";

export function MainBody() {
  const [searchBook, setSearchBook] = useState(null);
  const [books, setBooks] = useState(BooksData);
  const [isFavourite, setIsFavourite] = useState(false);

  // let to search the books
  function handleSearch(value) {
    setSearchBook(value);
    const filtered = books.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setBooks(filtered);
  }

  // let to do favourite/unfavourite books
  function handleFavourite(bookId) {
    setIsFavourite(!isFavourite);
    const bookIndex = books.findIndex((book) => book.id === bookId);
    const newBooks = [...books];
    newBooks[bookIndex].isFavourite = !newBooks[bookIndex].isFavourite;
    setBooks(newBooks);
  }

  // handling to sort
  function handleSort(val) {
    if (val !== "") {
      const updateBooks = [...books].sort((a, b) => {
        if (val === "name_asc" || val === "name_desc") {
          const titleA = a.name.toUpperCase();
          const titleB = b.name.toUpperCase();
          return val === "name_asc"
            ? titleA.localeCompare(titleB)
            : titleB.localeCompare(titleA);
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
        <BookItem
          searchBook={searchBook}
          booksData={books}
          onFavourite={handleFavourite}
        />
      </main>
    </div>
  );
}
