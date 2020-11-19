
const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RANTS':
      return action.rants
    default:
      return state
  }
}

export default reducer