export function filterTasks(books, query) {
  return books.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}
