import {getAllRantsAPI} from '../apis/rants'

export function setRants (rants) {
  return {
    type: 'SET_RANTS',
    rants
  }
}

export function fetchRants() {
  return dispatch => {
    return getAllRantsAPI()
      .then(rants => {
        dispatch(setRants(rants))
        return null
      })
    }
  }