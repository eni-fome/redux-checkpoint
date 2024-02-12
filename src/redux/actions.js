// Action Types
export const ADD_TASK = 'ADD_TASK';

// Action Creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    description,
  },
});