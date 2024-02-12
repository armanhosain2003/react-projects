const TaskReducer = (state, action) => {
  switch (action.type) {
    case "AddTask":
      return {
        ...state,
        taskData: [...state.taskData, action.payload],
      };

    case "EditTask": {
      return {
        ...state,
        taskData: state.taskData.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        editTask: null,
      };
    }

    case "OnEditTask": {
      return {
        ...state,
        editTask: action.payload,
      };
    }

    case "OnDeleteTask": {
      return {
        ...state,
        deleteTaskId: action.payload,
      };
    }

    case "DeleteTask": {
      return {
        ...state,
        taskData: state.taskData.filter((item) => item.id !== action.payload),
        deleteTaskId: null,
      };
    }

    case "DeleteAllTasks": {
      return {
        ...state,
        taskData: [],
      };
    }

    default: {
      throw new Error(`No matched ${action.payload}`);
    }
  }
};

export { TaskReducer };
