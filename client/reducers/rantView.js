import { GET_RANTS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANTS:
      return [...state]
    default:
      return state
  }
}

export default reducer
