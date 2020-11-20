import { GET_RANTS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANTS:
        console.log(action.rants)
        console.log(action)
      return action.rants
      
    default:
      return state
  }
}

export default reducer
