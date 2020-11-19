// import { getRants } from '../apis/fruits'

export const SET_AUTHOR = 'SET_AUTHOR'



// export function fetchFruits () {
//   return dispatch => {
//     return getFruits()
//       .then(fruits => {
//         dispatch(setFruits(fruits))
//         return null
//       })
//   }
// }

export function setAuthor (author) {
  return {
    type: SET_AUTHOR,
    author
  }


}


