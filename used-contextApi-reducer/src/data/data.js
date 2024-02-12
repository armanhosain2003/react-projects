const initialState = {
  taskData: [
    {
      id: 1,
      title: "Integration API",
      description: `Connect an existing API to a third-party database using
          secure methods and handle data exchange efficiently.`,
      tags: ["Web", "Python", "API"],
      priority: "High",
      isFavourite: false,
    },
    {
      id: 2,
      title: "API Data Synchronization with Python",
      description: `Implement a Python solution to synchronize data between an
          API and a third-party database securely, optimizing data
          exchange.`,
      tags: ["Python", "API", "Data Synchronizatio"],
      priority: "High",
      isFavourite: true,
    },
    {
      id: 3,
      title: "Efficient Web API Connectivity in Python",
      description: `Develop a Python-based solution for connecting an API to a
          third-party database securely, focusing on efficient data
          handling and exchange.`,
      tags: ["Web", "Python", "API"],
      priority: "Medium",
      isFavourite: false,
    },
    {
      id: 4,
      title: "Data Handlin",
      description: `Integrate a web API with a third-party database using
          secure methods, focusing on seamless data exchange and
          data integrity.Integrate a web API with a third-party database using
          secure methods, focusing on seamless data exchange and
          data integrity.`,
      tags: ["Web", "Python", "Security"],
      priority: "Low",
      isFavourite: false,
    },
  ],
  editTask: null,
  deleteTaskId: null,
};

export { initialState };
