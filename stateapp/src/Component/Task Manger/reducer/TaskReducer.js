const initialData = {
  initialVal: [],
};

const TaskReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'TASK':
      return {
        ...state,
        initialVal: [...state.initialVal, action.payload], // returns a new array only when changed
      };
    default:
      return state; // returns the exact same state reference if nothing changes
  }
};

export default TaskReducer
