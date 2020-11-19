import { getAllRantsAPI } from "../apis/rants"

export const GET_RANTS = 'GET_RANTS'


export const getRants = (rants) => {
  return {
    type: GET_RANTS,
    rants
  }
}


export const fetchRants = () => {
return (dispatch) => {
    getAllRantsAPI().then(rants => {
      dispatch(getRants(rants))
    })
    .catch((err) => console.log(err))
  }
}