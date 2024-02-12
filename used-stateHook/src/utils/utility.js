export const filterTasks = (tasks, query) => {
  query = query.toLowerCase();
  return tasks.filter((item) =>
    item.title.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
};

export const getNextId = (tasks) => {
  return tasks.reduce((prev, current) => Math.max(prev, current.id), 0) + 1;
};
