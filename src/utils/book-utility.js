export const getNextUrl = (src) => {
  return new URL(`../assets/book-covers/${src}`, import.meta.url).href;
};
