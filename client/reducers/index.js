import { combineReducers } from 'redux'


// import fruits from './fruits'
import rants from './rants'
import userName from './userName'

export default combineReducers({
  userName,
  rants,
})
