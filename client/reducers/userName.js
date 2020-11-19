const initialState = "Anonymous"

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.userName
    default:
      return state
  }
}

export default reducer