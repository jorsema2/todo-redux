const initialState = ["Go to gym", "Clean dishes"]

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TASK":
      return [...state, "Hola"]
    default:
      return state;
  }
};
